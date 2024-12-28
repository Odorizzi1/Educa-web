// src/containers/LoginContainer.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";
import { login } from "../../services/API/LoginService";
import { registerUser } from "../../services/API/RegisterService";
import { useAuth } from "../../context/AuthContext";

import { useMediaQuery } from "react-responsive";



const LoginContainer = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [existAccount, setExistAccount] = useState(true);
  const navigate = useNavigate();
  const { saveToken } = useAuth();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const executeLogin = async () => {
    try {
      setLoading(true)
      const data = await login(user, password);
      saveToken(data.jwt)
      localStorage.setItem("authToken", data.jwt);
      navigate(`/perfil/${data.userId}`);
      setLoading(false)
    } catch (err: any) {
      setError("Verifique suas credenciais e tente novamente.");
      setLoading(false)
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
      setLoading(true)
      await registerUser(formData.name, formData.password, formData.email);

      setExistAccount(true);
      setLoading(false)
    } catch (err: any) {
      setError("Registration failed: " + err.message);
      setLoading(false)
    }
  };
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });

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
      loading={loading}
      isMobile={isMobile}
    />
  );
};

export default LoginContainer;
