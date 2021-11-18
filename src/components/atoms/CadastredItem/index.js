import React from 'react';

import { Item } from './styles';

const CadastredItem = ({ name, dueDate, branch, number }) => {
  const [reserved, setReserved] = React.useState(0);

  return (
    <div>
      <Item>
        <button onClick={() => {
          setReserved(reserved > 0 ? reserved - 1 : 0);
        }}>-</button>
        <div>
          <p>Nome: {name}</p>
          <p>Marca: {branch}</p>
          <p>Data de vencimento: {dueDate}</p>
          <p>Quantidade disponível: {number}</p>
        </div>
        <button onClick={() => {
          setReserved(reserved > number ? reserved : reserved + 1);
        }}>+</button>
      </Item>
      Quantidade reservada: {reserved}
    </div>
  );
};

export default CadastredItem;