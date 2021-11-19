import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { SignUpForm } from './../../components/molecules';
import { PageDefault } from './../../components/organisms';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isOng, setIsOng] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    navigate(isOng ? '/item' : '/view');
  };

  return (
    <PageDefault showHeader={false} style={{ padding: 0, maxWidth: '99999px' }}>
      <SignUpForm
        email={email} 
        onChangeEmail={setEmail} 
        password={password}
        onChangePassword={setPassword}
        onSendData={onSubmit}
        ong={isOng}
        setOng={setIsOng}
      /> 
    </PageDefault>
  );
};

export default SignUp;