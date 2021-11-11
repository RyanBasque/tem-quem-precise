import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
    const AppRoutes = () => {
        const routes = useRoutes([
            { path: '/', element: <Home /> },
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