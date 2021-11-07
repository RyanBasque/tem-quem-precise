import React from 'react';

import { ApresentationSlide } from '../../components/atoms';
import { HowToHelp, AboutThisProject } from './../../components/molecules';
import { PageDefault } from '../../components/organisms';

const Home = () => {
  return (
    <PageDefault>
      <ApresentationSlide />
      <HowToHelp />
      <AboutThisProject />
    </PageDefault>
  );
};

export default Home;