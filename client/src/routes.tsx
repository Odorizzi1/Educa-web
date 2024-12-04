

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";

import { PerfilContainer } from "./pages/perfil";
import { StartContainer } from "./pages/start";
import PrivateRoute from "./components/utils/PrivateRoute";
import LoginContainer from "./pages/login/LoginContainer";

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/perfil/:userId" element={
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
