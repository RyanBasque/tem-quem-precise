import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";

import { Home, Login, SignUp } from "../pages";

const Routes = () => {
    const AppRoutes = () => {
      const routes = useRoutes([
        { path: '*', element: <h1>404</h1> },
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <SignUp /> },
      ]);

      return routes;
    };

   return(
    <Router>
      <AppRoutes />
    </Router>
   )
}

export default Routes;