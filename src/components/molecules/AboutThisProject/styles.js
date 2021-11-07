import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  margin-top: 10rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${color.orange};

    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: ${color.gray};

    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;