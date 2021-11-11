import React, { Fragment, memo } from 'react';

import { StyledInput } from './styles';

const FormInput = ({ type, placeholder, name, change }) => {
  return (
    <Fragment>
      <StyledInput 
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={change}
      />
    </Fragment>
  ); 
};

export default memo(FormInput);