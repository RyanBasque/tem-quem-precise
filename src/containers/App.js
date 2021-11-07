import { Fragment, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import './App.css';

import Home from '../pages/Home';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}

export default App;
