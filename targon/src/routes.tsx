// Arquivo: Routes.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import { LoginView } from "./pages/login/LoginView";

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/login" element={<LoginView />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
