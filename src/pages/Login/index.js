import React, { useState } from 'react';

import { LoginForm } from './../../components/molecules';
import { PageDefault } from './../../components/organisms';
import { postLogin } from './../../services/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      postLogin('opa', { email, password });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <PageDefault showHeader={false} style={{ padding: 0, maxWidth: '99999px' }}>
      <LoginForm
        email={email} 
        onChangeEmail={setEmail} 
        password={password}
        onChangePassword={setPassword}
        onSendData={onSubmit}
      /> 
    </PageDefault>
  );
};

export default Login;