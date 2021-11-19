import { Fragment, useEffect } from 'react';
import Aos from "aos";
import { ToastContainer } from 'react-toastify';

import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import Routes from '../routes/routes';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <Routes />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
