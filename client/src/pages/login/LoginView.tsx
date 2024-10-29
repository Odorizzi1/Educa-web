import { Box, Divider, Typography } from "@mui/material";
import { Button, TextField } from "../../components/atoms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import FormUser from "../../components/templates/FormUser/FormUser";
import FormLogin from "../../components/templates/FormUser/FormLogin";

const LoginView = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [existAccount, setExistAccount] = useState(true)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const executeLogin = async (user: String, password: String) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const data = await response.json();
      localStorage.setItem('token', data.jwt);
      navigate("/perfil");

    } catch (err: any) {
      setError("Login failed: " + err.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
 try{
  const register = await fetch("http://localhost:8080/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      password: formData.password,
      email:formData.email
    }),
  });

  console.log(register, "return")

 }catch{

 }
  };

  return (
    <Box display={"flex"} width={"100%"} height={"100vh"} justifyContent={"space-between"} alignItems={"center"}>
      <Box width={"40vw"} bgcolor={"#4F3C8E"} height={"100vh"}>

      </Box>
      <Box width={"60vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <Box width={"30vw"} height={"50vh"} display={"flex"} borderRadius={"10px"} alignItems={"center"} justifyContent={"center"} border={"1px solid #A9A9A9"}>

          {existAccount ?
            <Box display="flex" gap={"15px"} flexDirection="column" alignItems={"center"}>
              <FormLogin
                user={user}
                setUser={setUser}
                password={password}
                setPassword={setPassword}
                executeLogin={() => executeLogin(user, password)}
                setExistAccount={() => setExistAccount(false)}
              />
            </Box> :

            <Box justifyContent={"center"} width={"100%"} height={"100%"} border={"1px solid black"} display="flex" gap={"15px"} flexDirection="column" alignItems={"center"}>
              <FormUser onClick={() => handleSubmit()} formData={formData} onInputChange={handleInputChange} />
            </Box>
          }

        </Box>
      </Box>

    </Box>
  );
};

export { LoginView };

