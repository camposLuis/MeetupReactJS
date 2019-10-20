import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { createMeetupSuccess, meetupFailure } from './actions';

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

    const response = yield call(api.post, 'meetups', meetup);

    history.push('/dashboard');

    toast.success('Cadastro realizado com sucesso!');

    yield put(createMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao cadastrar, confira os dados informados!');
    yield put(meetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
