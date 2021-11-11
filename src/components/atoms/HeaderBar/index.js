import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeaderBar } from './styles';

const HeaderBar = () => {
  return (
    <StyledHeaderBar data-aos="flip-left">
      <Link to="/">Entrar</Link>
    </StyledHeaderBar>
  );
};

export default HeaderBar;