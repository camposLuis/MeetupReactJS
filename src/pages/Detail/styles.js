import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  strong {
    color: #fff;
    font-size: 32px;
  }
`;

export const Actions = styled.div`
  display: flex;
`;

export const EditButton = styled.button`
  margin-right: 25px;
  background: #4dbaf9;
  height: 42px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#4dbaf9')};
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

export const CancelButton = styled.button`
  background: #f94d6a;
  height: 42px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px 0 20px;

    strong {
      margin-left: 5px;
    }
  }
`;

export const Banner = styled.div`
  margin-top: 40px;

  img {
    width: 940px;
    height: 300px;
  }
`;

export const Description = styled.div`
  margin-top: 20px;

  p {
    font-size: 18px;
    color: #fff;
  }
`;

export const Location = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DateEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
    font-size: 16px;
    color: #fff;
    opacity: 0.6;
  }
`;

export const AddressEvent = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
    font-size: 16px;
    color: #fff;
    opacity: 0.6;
  }
`;
