import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  MdDeleteForever,
  MdCreate,
  MdInsertInvitation,
  MdLocationOn,
} from 'react-icons/md';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Header,
  Title,
  Actions,
  EditButton,
  CancelButton,
  Banner,
  Description,
  Location,
  DateEvent,
  AddressEvent,
} from './styles';

export default function Detail() {
  const loading = useSelector(state => state.meetup.loading);
  const dispatch = useDispatch();
  const [meetup, setMeetup] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}/detail`);

      try {
        const data = {
          id: response.data.id,
          title: response.data.title,
          url: response.data.banner.url,
          description: response.data.description,
          location: response.data.location,
          past: response.data.past,
          dateFormated: format(
            parseISO(response.data.date),
            "dd 'de' MMMM 'de' yyyy', às' H'h'",
            { locale: pt }
          ),
        };

        setMeetup(data);
      } catch (err) {
        history.push('/dashboard');
      }
    }
    loadMeetup();
  }, [id]);

  function editMeetup(meetupEditable) {
    if (!meetupEditable.past) {
      history.push(`/editMeetup/${meetupEditable.id}`);
    } else {
      toast.error('Meetup já realizada, não é possível editar');
    }
  }

  function canceledMeetup(idCanceled) {
    dispatch(cancelMeetupRequest(idCanceled));
  }

  return (
    <Container>
      <Header>
        <Title>
          <strong>{meetup.title}</strong>
        </Title>
        <Actions>
          <EditButton type="button" onClick={() => editMeetup(meetup)}>
            <div>
              <MdCreate size={20} color="#FFF" />
              <strong>Editar</strong>
            </div>
          </EditButton>
          <CancelButton type="button" onClick={() => canceledMeetup(meetup.id)}>
            <div>
              {loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <MdDeleteForever size={20} color="#FFF" />
              )}
              <strong>Cancelar</strong>
            </div>
          </CancelButton>
        </Actions>
      </Header>
      <Banner>
        <img src={meetup.url} alt="React-Native" />
      </Banner>
      <Description>
        <p>{meetup.description}</p>
      </Description>
      <Location>
        <DateEvent>
          <MdInsertInvitation size={20} color="#FFF" opacity={0.6} />
          <span>{meetup.dateFormated}</span>
        </DateEvent>
        <AddressEvent>
          <MdLocationOn size={20} color="#FFF" opacity={0.6} />
          <span>{meetup.location}</span>
        </AddressEvent>
      </Location>
    </Container>
  );
}
