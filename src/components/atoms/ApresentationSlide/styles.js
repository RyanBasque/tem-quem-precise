import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const ApresentationContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ImageContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 600px;
    height: 100%;

    object-fit: cover;

    @media (max-width: 768px) {
      width: 80%;
      height: 80%;
      max-width: 300px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding-left: 20px;

  @media (max-width: 768px) {
    h1 {
      margin: 20px 0;
    }
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 43px !important;
      line-height: 63px !important;
    }

    p {
      font-size: 18px !important;
      line-height: 28px !important;
    }
  }

  p:first-child {
    font-size: 15px;
    color: ${color.black};
  }

  p {
    font-size: 15px;
    color: ${color.black};
  }

  h1 {
    font-size: 23px;
    line-height: 23px;
    font-weight: bold;
    color: ${color.orange};
  }
`;