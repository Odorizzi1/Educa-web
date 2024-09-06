// Arquivo: Routes.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import { LoginView } from "./pages/login/LoginView";
import { RegisterPage } from "./pages/register/RegisterPage";
import { StudentFormPage } from "./pages/student-form/StudentFormPage";
import { TeacherInfoPage } from "./pages/teacher-info/TeacherInfoPage";
import { TeacherFormPage } from "./pages/teacher-form";
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
