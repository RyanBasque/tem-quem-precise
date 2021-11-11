import React from 'react';
import { Link } from 'react-router-dom';

import { FormInput } from '../../atoms';

import { LoginContainer, Form, ImageContainer } from './styles';

import loginImage from '../../../assets/images/login.svg';

const LoginForm = ({ email, onChangeEmail, password, onChangePassword }) => {

  return (
    <LoginContainer>
      <div>
        <Form>
          <h1 data-aos="fade-up-left">Login</h1>
          <fieldset data-aos="fade-right">
            <FormInput
              name={email} 
              change={onChangeEmail}
              type="text" 
              placeholder="E-mail"
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
          <Link to="/" data-aos="fade-up-left">Não sou cadastrado</Link>
          <button data-aos="fade-up-left">Entrar</button>
        </Form>
      </div>
      <ImageContainer data-aos="flip-up">
        <img src={loginImage} alt="Login" />
      </ImageContainer>
    </LoginContainer>
  );
};

export default LoginForm;