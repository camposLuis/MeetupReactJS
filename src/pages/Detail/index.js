import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  MdDeleteForever,
  MdCreate,
  MdInsertInvitation,
  MdLocationOn,
} from 'react-icons/md';

import api from '~/services/api';

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
  const [meetup, setMeetup] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);

      const data = {
        id: response.data.id,
        title: response.data.title,
        url: response.data.banner.url,
        description: response.data.description,
        location: response.data.location,
        dateFormated: format(
          parseISO(response.data.date),
          "dd 'de' MMMM 'de' yyyy', às' H'h'",
          { locale: pt }
        ),
      };

      setMeetup(data);
    }
    loadMeetup();
  }, [id]);

  return (
    <Container>
      <Header>
        <Title>
          <strong>{meetup.title}</strong>
        </Title>
        <Actions>
          <EditButton type="submit">
            <div>
              <MdCreate size={20} color="#FFF" />
              <strong>Editar</strong>
            </div>
          </EditButton>
          <CancelButton type="submit">
            <div>
              <MdDeleteForever size={20} color="#FFF" />
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
