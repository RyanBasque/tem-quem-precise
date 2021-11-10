import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  margin-top: 10rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    color: ${color.orange};

    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${color.black};

    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      text-align: center;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;