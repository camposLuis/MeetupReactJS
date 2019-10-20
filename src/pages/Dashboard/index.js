import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Register, Time, NotRegister } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups');

      const data = response.data.map(event => {
        return {
          id: event.id,
          title: event.title,
          dateFormated: format(
            parseISO(event.date),
            "dd 'de' MMMM 'de' yyyy', às' H'h'",
            { locale: pt }
          ),
        };
      });

      setMeetup(data);
    }
    loadMeetup();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>

        <Link to="/newMeetup">
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
            <strong>Novo meetup</strong>
          </div>
        </Link>
      </header>
      {meetup.length !== 0 ? (
        <ul>
          {meetup.map(meetup => (
            <Register key={meetup.id}>
              <strong>{meetup.title}</strong>
              <Time>
                <span>{meetup.dateFormated}</span>
                <Link to={`/detailMeetup/${meetup.id}`}>
                  <MdChevronRight size={24} color="#FFF" />
                </Link>
              </Time>
            </Register>
          ))}
        </ul>
      ) : (
        <NotRegister>
          <strong>Nenhum registro</strong>
        </NotRegister>
      )}
    </Container>
  );
}
