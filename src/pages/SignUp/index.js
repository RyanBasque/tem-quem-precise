import React, { useState } from 'react';

import { SignUpForm } from './../../components/molecules';
import { PageDefault } from './../../components/organisms';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <PageDefault showHeader={false} style={{ padding: 0, maxWidth: '99999px' }}>
      <SignUpForm
        email={email} 
        onChangeEmail={setEmail} 
        password={password}
        onChangePassword={setPassword}
        onSendData={onSubmit}
      /> 
    </PageDefault>
  );
};

export default SignUp;