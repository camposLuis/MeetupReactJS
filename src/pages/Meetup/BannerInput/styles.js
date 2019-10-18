import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    height: 300px;
    width: 940px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;

    span {
      color: #fff;
      opacity: 0.3;
      font-size: 20px;
      margin-top: 10px;
    }

    &:hover {
      opacity: 0.7;
    }
    img {
      height: 300px;
      width: 940px;
      border: 0;
    }
    input {
      display: none;
      border: 0;
    }
  }
`;
