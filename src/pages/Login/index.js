import React, { useState } from 'react';

import { LoginForm } from './../../components/molecules';
import { PageDefault } from './../../components/organisms';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageDefault showHeader={false} style={{ padding: 0, maxWidth: '99999px' }}>
      <LoginForm
        email={email} 
        onChangeEmail={setEmail} 
        password={password}
        onChangePassword={setPassword}
      /> 
    </PageDefault>
  );
};

export default Login;