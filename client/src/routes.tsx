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

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<LoginView />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/form-aluno" element={<StudentFormPage />}/>
        <Route path="professor-info" element={<TeacherInfoPage />}/>
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
