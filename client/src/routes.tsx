// Arquivo: Routes.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import { LoginView } from "./pages/login/LoginView";
import { RegisterView } from "./pages/register/RegisterView";

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<LoginView />} />
        <Route path="/registro" element={<RegisterView />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
