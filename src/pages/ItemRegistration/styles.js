import styled from 'styled-components';
import { color } from './../../assets/css/colors';

export const Title = styled.h1`
  color: ${color.orange};
  font-size: 2rem;
  text-align: center;

  margin-top: 2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 50%;

    margin: 10px 0;

    background-color: ${color.background};
  }

  section {
    display: flex;

    margin: 20px 0;

    div {
      width: 30px;
      height: 30px;

      border-radius: 100%;

      margin: 0 10px;

      background-color: ${color.white};

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }
  }

  button {
    width: 50%;
    height: 50px;

    background-color: ${color.orange};

    border: none;
    border-radius: 5px;

    margin: 20px 0;

    cursor: pointer;
  }
`;