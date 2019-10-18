import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      resize: none;
      border-radius: 4px;
      height: 100px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

export const Button = styled.button`
  background: #f94d6a;
  height: 42px;
  width: 180px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  align-self: flex-end;

  &:hover {
    background: ${darken(0.05, '#f94d6a')};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px 0 20px;

    strong {
      margin-left: 5px;
    }
  }
`;
