import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input
          name="name"
          placeholder="Nome completo"
          value="Luís Henrique Silva Campos"
        />
        <Input
          name="email"
          placeholder="Seu email"
          value="luiscampos@gmail.com"
        />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <div>
              <MdAddCircleOutline size={20} color="#FFF" />
              <strong>Salvar perfil</strong>
            </div>
          </button>
        </div>
      </Form>
    </Container>
  );
}
