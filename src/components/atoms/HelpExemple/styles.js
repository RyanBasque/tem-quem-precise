import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const HelpContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    overflow: hidden;

    width: 100%;
    height: 100%;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      height: 50%;
    }

    h1 {
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      color: ${color.orange};

      margin: 20px 0;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
      color: ${color.black};

      margin: 10px 0;
    }
  }
`;

export const ImageContainer = styled.div`

`;