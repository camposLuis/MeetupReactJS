import React from 'react';
import {
  MdDeleteForever,
  MdCreate,
  MdInsertInvitation,
  MdLocationOn,
} from 'react-icons/md';

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

import banner from '~/assets/meetup.svg';

export default function Detail() {
  return (
    <Container>
      <Header>
        <Title>
          <strong>Meetup de React Native</strong>
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
        <img src={banner} alt="React-Native" />
      </Banner>
      <Description>
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados.{' '}
        </p>{' '}
        <br />
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
      </Description>
      <Location>
        <DateEvent>
          <MdInsertInvitation size={20} color="#FFF" opacity={0.6} />
          <span>20 de Outubro, às 20h</span>
        </DateEvent>
        <AddressEvent>
          <MdLocationOn size={20} color="#FFF" opacity={0.6} />
          <span>Rua Dos Benvindos, 101</span>
        </AddressEvent>
      </Location>
    </Container>
  );
}
