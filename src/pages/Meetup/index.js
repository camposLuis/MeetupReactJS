import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

import BannerInput from './BannerInput';
import DatePickerInput from '~/components/DatePickerInput';

import api from '~/services/api';
import history from '~/services/history';

export default function Meetup() {
  const loading = useSelector(state => state.meetup.loading);

  const dispatch = useDispatch();

  const [meetup, setMeetup] = useState(null);
  const [urlBanner, setUrlBanner] = useState(null);
  const [idBanner, setIdBanner] = useState(null);
  const [dateSelected, setDateSelected] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      if (pathname === '/newMeetup') {
        setMeetup(null);
      } else {
        try {
          const response = await api.get(`meetups/${id}/detail`);

          if (response.data.past) {
            history.push(`/detailMeetup/${id}`);
            toast.error('Meetup já realizada, não é possível editar');
          }

          const data = {
            id: response.data.id,
            title: response.data.title,
            banner_id: response.data.banner.id,
            url: response.data.banner.url,
            description: response.data.description,
            location: response.data.location,
            date: response.data.date,
          };

          setIdBanner(data.banner_id);
          setUrlBanner(data.url);
          setDateSelected(data.date);
          setMeetup(data);
        } catch (err) {
          history.push('/dashboard');
        }
      }
    }
    loadMeetup();
  }, [id, pathname]);

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        {meetup && <Input name="id" type="hidden" />}
        <BannerInput
          name="banner_id"
          idBanner={idBanner}
          urlBanner={urlBanner}
        />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePickerInput name="date" dateSelected={dateSelected} />
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
