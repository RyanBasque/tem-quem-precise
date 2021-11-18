import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const Item = styled.div`
  width: 100%;
  height: 90px;

  margin: 20px 0;

  background-color: ${color.white};

  border-radius: 15px;

  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
    height: 100%;

    padding: 20px;

    display: flex;
    justify-content: space-around;
  }


  button {
    background-color: ${color.orange};

    border: none;

    height: 100%;
    width: 90px;
  }

  button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;