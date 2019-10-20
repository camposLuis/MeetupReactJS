import React from 'react';

import notFound from '~/assets/notfound404.png';
import { Container } from './styles';

export default function My404NotFound() {
  return (
    <Container>
      <img src={notFound} alt="" />
    </Container>
  );
}
