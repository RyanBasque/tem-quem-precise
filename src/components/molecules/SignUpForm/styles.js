import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const SignContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  width: 100vw;
  height: 100vh;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RadioButton = styled.section`
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;

  label {
    text-align: center;
  }

  input {
    display: block;
    margin: 10px 0;

    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 0.5rem;

  padding: 20px;

  width: 70%;
  height: 50%;

  background-color: ${color.white};

  h1 {
    font-size: 1.3rem;
    color: ${color.orange};
  }

  fieldset {
    border: none;

    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: ${color.black};
    font-size: .8rem;

    margin-top: .8rem;
  }

  button {
    width: 100%;
    height: 2.5rem;

    border: none;

    border-radius: 2px;
  }

  @media (min-width: 768px) {
    input, fieldset {
      width: 80%;  
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: none !important;
  }

  img {
    max-width: 600px;
    max-height: 600px;
  }
`;