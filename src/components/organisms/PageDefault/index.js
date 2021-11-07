import React, { Fragment } from 'react';

import { MainContainer } from './styles';

import HeaderBar from './../../atoms/HeaderBar';

const PageDefault = ({ children }) => {
  return (
    <Fragment>
      <HeaderBar />
      <MainContainer>
        {children}
      </MainContainer>
    </Fragment>
  );
};

export default PageDefault;