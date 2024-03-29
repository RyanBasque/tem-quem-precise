import React from 'react';

import { HowToHelpWrapper, HelpMessageContainer } from './styles';

import { HelpExemple } from '../../atoms';

import HelpImageOne from '../../../assets/images/help-1.svg';
import HelpImageTwo from '../../../assets/images/help-2.svg';
import HelpImageThree from '../../../assets/images/help-3.svg';

const HowToHelp = () => {
  return (
    <HowToHelpWrapper>
      <h1 data-aos="fade-down">Como você <br /> pode colaborar?</h1>

    <HelpMessageContainer>
      <HelpExemple>
        <img data-aos="fade-up-left" src={HelpImageOne} alt="Como ajudar" />
        <h1 data-aos="fade-up-left">Doando alimentos e roupas!</h1>
        <p data-aos="fade-up-left">
          Você pode doar seus alimentos ou roupas <br /> para pessoas mais necessitadas que você.
          Qualquer valor ou coisa pode salvar a vida de alguém, por menor que seja!
        </p>
      </HelpExemple>
      <HelpExemple>
        <img data-aos="fade-up" src={HelpImageTwo} alt="Como ajudar" />
        <h1 data-aos="fade-up">Entrando em contato com uma ONG e relatando pessoas necessitadas.</h1>
        <p data-aos="fade-up">
          Entre em contato com ONG´s e avise-os sobre pessoas que precisam de algo e fale sobre nosso projeto. Isso faz com que mais pessoas ajudem outras pessoas! 
        </p>
      </HelpExemple>
      <HelpExemple>
        <img data-aos="fade-up-right" src={HelpImageThree} alt="Como ajudar" />
        <h1 data-aos="fade-up-right">Compartilhando esse projeto!</h1>
        <p data-aos="fade-up-right">
          Quando você fala sobre esse projeto ou posta em redes sociais, <br />
          você está estimulando a sociedade a ajudar pessoas mais necessitadas, e consequentemente, a ajudar a si mesmo a se tornar uma pessoa melhor.
        </p>
      </HelpExemple>
    </HelpMessageContainer>

    </HowToHelpWrapper>
  );
};

export default HowToHelp;