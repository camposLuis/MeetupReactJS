import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { isBefore } from 'date-fns';

import history from '~/services/history';
import api from '~/services/api';

import {
  createMeetupSuccess,
  meetupFailure,
  cancelMeetupSuccess,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { title, description, location, date, banner_id } = payload.data;

    const organizer_id = yield select(state => state.user.profile.id);

    const meetup = {
      title,
      description,
      location,
      date,
      organizer_id,
      banner_id,
    };

    if (isBefore(meetup.date, new Date())) {
      toast.error('A data informada não é permitida, tente outra');
      yield put(meetupFailure());
    } else if (payload.data.id === undefined) {
      const response = yield call(api.post, 'meetups', meetup);

      history.push('/dashboard');

      toast.success('Meetup cadastrada com sucesso!');

      yield put(createMeetupSuccess(response.data));
    } else {
      const response = yield call(
        api.put,
        `meetups/${payload.data.id}`,
        meetup
      );

      history.push('/dashboard');

      toast.success('Meetup editada com sucesso!');

      yield put(createMeetupSuccess(response.data));
    }
  } catch (err) {
    toast.error('Erro ao salvar, confira os dados informados!');
    yield put(meetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const {
      data: { id, past, title },
    } = yield call(api.get, `meetups/${payload.id}/detail`);

    const {
      data: { amount },
    } = yield call(api.get, `meetups/${payload.id}/subscriptions`);

    if (!past && amount === 0) {
      yield call(api.delete, `meetups/${id}/canceled`);

      history.push('/dashboard');

      toast.success(`${title} foi cancelada com sucesso`);

      yield put(cancelMeetupSuccess());
    } else {
      if (amount !== 0) {
        toast.error('Existem inscrições, não foi possível cancelar');
      } else {
        toast.error('Meetup já realizada, não foi possível cancelar');
      }

      yield put(meetupFailure());
    }
  } catch (err) {
    toast.error('Erro ao cancelar');
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
