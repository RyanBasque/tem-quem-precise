import { Fragment, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import './App.css';

import Routes from '../routes/routes';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}

export default App;
