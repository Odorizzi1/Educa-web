// src/containers/LoginContainer.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";
import { login } from "../../services/API/LoginService";
import { registerUser } from "../../services/API/RegisterService";



const LoginContainer = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [existAccount, setExistAccount] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const executeLogin = async () => {
    try {
      const data = await login(user, password);
      localStorage.setItem("token", data.jwt);
      navigate("/perfil");
    } catch (err: any) {
      setError("Login failed: " + err.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async () => {
    try {
      await registerUser(formData.name, formData.password, formData.email);
      setExistAccount(true); 
    } catch (err: any) {
      setError("Registration failed: " + err.message);
    }
  };

  return (
    <LoginView
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      error={error}
      existAccount={existAccount}
      setExistAccount={setExistAccount}
      formData={formData}
      handleInputChange={handleInputChange}
      executeLogin={executeLogin}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
