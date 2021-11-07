import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-top: 4rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${color.orange};
  }
`;