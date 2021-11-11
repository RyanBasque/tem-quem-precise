import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";

import { Home, Login } from "../pages";

const Routes = () => {
    const AppRoutes = () => {
      const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
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