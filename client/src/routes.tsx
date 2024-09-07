

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import { LoginView } from "./pages/login/LoginView";
import { PerfilContainer } from "./pages/perfil";
import { StartContainer } from "./pages/start";

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<LoginView />} />
        <Route path="/perfil" element={<PerfilContainer />} />
        <Route path="/start/:courses" element={<StartContainer />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
