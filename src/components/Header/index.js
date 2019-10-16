import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
              <img src={logo} alt="Meetup" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Luís Campos</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Luís Campos"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
