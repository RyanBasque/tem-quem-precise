import React from 'react';

import { HelpContainer } from './styles';

const HelpExemple = ({ children }) => {
  return (
    <HelpContainer>
      <div>
        {children}
      </div>
    </HelpContainer>
  );
};

export default HelpExemple;