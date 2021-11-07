import React from 'react';

import { ApresentationContainer, ImageContainer, TextContainer } from './styles';

import SlideOne from '../../../assets/images/home-slide-1.svg';

const ApresentationSlide = () => {
  return (
    <ApresentationContainer>
      <ImageContainer data-aos="fade-up">
        <img src={SlideOne} alt="Apresentação" />
      </ImageContainer>
      <TextContainer>
        <p data-aos="fade-up">Ajude-nos a criar um mundo melhor!</p>
        <h1 data-aos="fade-up">
          Um novo jeito <br /> de ajudar as pessoas <br /> mais necessitadas!
        </h1>
        <p data-aos="fade-up">
          Um projeto feito para conscientizar grandes mercados e estabelecimentos a doar os alimentos próximos da data de vencimento
          para pessoas em condições críticas.
        </p>
      </TextContainer>
    </ApresentationContainer>
  );
};

export default ApresentationSlide;