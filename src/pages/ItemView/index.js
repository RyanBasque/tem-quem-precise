import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from './styles';

import { CadastredItem } from '../../components/atoms';
import { PageDefault } from '../../components/organisms';

const ItemView = () => {
  const [itens, setItens] = React.useState();
  
  React.useEffect(() => {
    localStorage.getItem('itens') && setItens(JSON.parse(localStorage.getItem('itens')));
    console.log(localStorage.getItem('itens'))
  }, []);

  return (
    <PageDefault showHeader={false}>
      <Title>Reserva de itens</Title>

      {
        itens ? itens.map(({ name, number, branch, dueDate }) => (
          <CadastredItem 
            key={name}
            name={name}
            dueDate={dueDate}
            branch={branch}
            number={number}
          />
        )) : (
          <Link to="/item">Adicionar itens</Link>
        )
      }
    </PageDefault>
  )
};

export default ItemView;