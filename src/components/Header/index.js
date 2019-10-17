import React from 'react';
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
              <strong>Luís Henrique Silva Campos</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="submit">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
