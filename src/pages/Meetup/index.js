import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Button } from './styles';

import BannerInput from './BannerInput';
import DatePickerInput from '~/components/DatePickerInput';

export default function Meetup() {
  return (
    <Container>
      <Form onSubmit={() => {}}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePickerInput name="date" />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
            <strong>Salvar meetup</strong>
          </div>
        </Button>
      </Form>
    </Container>
  );
}
