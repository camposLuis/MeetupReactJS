import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    strong {
      color: #fff;
      font-size: 32px;
    }
  }

  a {
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }

    div {
      height: 42px;
      width: 172px;
      padding: 0 25px 0 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      strong {
        font-size: 16px;
      }
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Register = styled.li`
  background: rgba(0, 0, 0, 0.2);
  width: 940px;
  height: 62px;
  border: 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    margin-left: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: normal;
  }
`;

export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #fff;
    font-size: 16px;
    opacity: 0.6;
    font-weight: normal;
  }

  > a {
    background: none;
    height: 62px;
    width: 80px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: none;
    }
  }
`;
