import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  input {
    width: 940px;
    height: 44px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
