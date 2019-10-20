import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

import BannerInput from './BannerInput';
import DatePickerInput from '~/components/DatePickerInput';

export default function Meetup() {
  const loading = useSelector(state => state.meetup.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePickerInput name="date" />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">
          <div>
            {loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <MdAddCircleOutline size={20} color="#FFF" />
            )}

            <strong>Salvar meetup</strong>
          </div>
        </Button>
      </Form>
    </Container>
  );
}
