import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const HowToHelpWrapper = styled.div`
  margin-top: 10rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${color.orange};
    margin-bottom: 1rem;

    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const HelpMessageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;;
  }
`;