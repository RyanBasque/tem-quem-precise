import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { Title, FormContainer } from './styles';

import { FormInput } from '../../components/atoms';
import { PageDefault } from '../../components/organisms';

const ItemRegistration = () => {
  const [number, setNumber] = React.useState(0);
  const [name, setName] = React.useState(0);
  const [branch, setBranch] = React.useState(0);
  const [dueDate, setDueDate] = React.useState(0);

  const postData = (e) => {
    e.preventDefault();
    const itens = [];

    try {
      if(!localStorage.getItem('itens')) {
        itens.push({
          number: number,
          name: name.target.value,
          branch: branch.target.value,
          dueDate: dueDate.target.value
        });

        localStorage.setItem('itens', JSON.stringify(itens));
      } else {
        const data = JSON.parse(localStorage.getItem('itens'));

        data.push({
          number: number,
          name: name.target.value,
          branch: branch.target.value,
          dueDate: dueDate.target.value
        });

        localStorage.setItem('itens', JSON.stringify(data));
      }

      setNumber(0);
      setName('orra');
      setBranch('');
      setDueDate('');

      toast('Item adicionado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {
        toast('Ocorreu um erro! :(', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  }

  return (
    <PageDefault showHeader={false}>
      <Title>Registro de itens</Title>

      <FormContainer>
        <FormInput 
          placeholder="Nome do item"
          name="name"
          change={setName}
        />
        <FormInput 
          placeholder="Marca do item"
          name="branch"
          change={setBranch}
        />
        <FormInput
          placeholder="Vencimento"
          name="dueDate"
          change={setDueDate}
        />

        {number}
        <section>
          <div onClick={() => {
            let n = number - 1;
            setNumber(n > 0 ? n : 0);
          }}>-</div>
            Quantidade
          <div onClick={() => {
            let n = number + 1;
            setNumber(n)
          }}>+</div>
        </section>

        <button onClick={postData}>Cadastrar</button>
      </FormContainer>

      <Link to="/view">Ver itens adicionados</Link>
    </PageDefault>
  );
};

export default ItemRegistration;