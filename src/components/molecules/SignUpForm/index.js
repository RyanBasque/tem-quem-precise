import React from 'react';
import { Link } from 'react-router-dom';

import { FormInput } from '../../atoms';

import { SignContainer, Form, ImageContainer, RadioButton } from './styles';

import loginImage from '../../../assets/images/login.svg';

const SignUpForm = ({ email, onChangeEmail, password, onChangePassword, onSendData, ong, setOng }) => {

  return (
    <SignContainer>
      <div>
        <Form>
          <h1 data-aos="fade-up-left">Cadastre-se</h1>
          <fieldset data-aos="fade-right">
            <FormInput
              name={email} 
              change={onChangeEmail}
              type="text" 
              placeholder="Seu melhor e-mail"
            />
          </fieldset>
          <fieldset data-aos="fade-left">
            <FormInput 
              name={password}
              change={onChangePassword} 
              type="text" 
              placeholder="Senha"
            />
          </fieldset>
          <fieldset data-aos="fade-left">
            <FormInput 
              name={password}
              change={onChangePassword} 
              type="text" 
              placeholder="Confirmação de senha" 
            />
          </fieldset>
          <RadioButton data-aos="fade-left">
            <label>Você representa uma ONG? <br /> (sim para ONG, não para mercado)</label>
            <input type="checkbox" name="ong" checked={ong} onChange={() => setOng(!ong)} /> 
            { ong ? 'Sim' : 'Não' }
          </RadioButton>
          <Link to="/login" data-aos="fade-up-left">Já tenho cadastro</Link>
          <button onClick={onSendData} data-aos="fade-up-left">Entrar</button>
        </Form>
      </div>
      <ImageContainer data-aos="flip-up">
        <img src={loginImage} alt="Login" />
      </ImageContainer>
    </SignContainer>
  );
};

export default SignUpForm;