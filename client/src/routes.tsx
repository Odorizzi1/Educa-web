

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import { LoginView } from "./pages/login/LoginView";
import { PerfilContainer } from "./pages/perfil";
import { StartContainer } from "./pages/start";
import PrivateRoute from "./components/utils/PrivateRoute";

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<LoginView />} />
        <Route path="/perfil" element={
          <PrivateRoute>
            <PerfilContainer />
          </PrivateRoute>
        } />
        <Route path="/start/:courses" element={<StartContainer />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
