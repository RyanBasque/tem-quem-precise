import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeaderBar } from './styles';

const HeaderBar = ({ showHeader = true }) => {
  return (
    <StyledHeaderBar showHeader={showHeader} data-aos="flip-left">
      <Link to="/login">Entrar</Link>
    </StyledHeaderBar>
  );
};

export default HeaderBar;