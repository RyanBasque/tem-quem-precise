import React from 'react';

import { AboutContainer } from './styles';

import Slide from '../../../assets/images/food.svg';

const AboutThisProject = () => {
  return (
    <AboutContainer>
      <div>
        <h1>Sobre esse projeto</h1>
        <p>
          Esse é um projeto desenvolvido para o Global Solution da FIAP, faculdade que
          estimula mentes a vivenciarem a inovação e o empreendedorismo. <br />
          Os integrantes do projeto são: Ryan Basque (RM89176), <br />
          Gustavo Carneiro (RM88392), Debora Toniatte (RM86829) e
          Matheus Correa (RM88286).
        </p>
      </div>
      <img src={Slide} alt="Slide" />
    </AboutContainer>
  );
};

export default AboutThisProject;