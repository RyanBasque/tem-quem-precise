import React, { Fragment } from 'react';

import { MainContainer } from './styles';

import HeaderBar from './../../atoms/HeaderBar';

const PageDefault = ({ children, showHeader = true, style }) => {
  return (
    <Fragment>
      <HeaderBar showHeader={showHeader} />
      <MainContainer style={style}>
        {children}
      </MainContainer>
    </Fragment>
  );
};

export default PageDefault;