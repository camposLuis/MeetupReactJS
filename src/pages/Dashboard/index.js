import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Register, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>

        <Link to="/meetup">
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
            <strong>Novo meetup</strong>
          </div>
        </Link>
      </header>
      <ul>
        <Register>
          <strong>Meetup de React Native</strong>
          <Time>
            <span>20 de Outubro, às 20h</span>
            <Link to="/meetup">
              <MdChevronRight size={24} color="#FFF" />
            </Link>
          </Time>
        </Register>
        <Register>
          <strong>Meetup de React Native</strong>
          <Time>
            <span>20 de Outubro, às 20h</span>
            <Link to="/meetup">
              <MdChevronRight size={24} color="#FFF" />
            </Link>
          </Time>
        </Register>
        <Register>
          <strong>Meetup de React Native</strong>
          <Time>
            <span>20 de Outubro, às 20h</span>
            <Link to="/meetup">
              <MdChevronRight size={24} color="#FFF" />
            </Link>
          </Time>
        </Register>
      </ul>
    </Container>
  );
}
