import { Box, Typography } from "@mui/material";
import { Button, TextField } from "../../components/atoms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginView = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
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

  return (
    <Box display={"flex"} width={"100%"} height={"100vh"} justifyContent={"space-between"} alignItems={"center"}>
      <Box width={"40vw"} bgcolor={"#4F3C8E"} height={"100vh"}>

      </Box>
      <Box width={"60vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
       <Box width={"30vw"} height={"50vh"} display={"flex"} borderRadius={"10px"} alignItems={"center"} justifyContent={"center"} border={"1px solid #A9A9A9"}>

        <Box display="flex" gap={"15px"} flexDirection="column" alignItems={"center"}>
          <TextField
            label="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button onClick={() => executeLogin(user, password)}>Login</Button>
        </Box>
        </Box>
      </Box>

    </Box>
  );
};

export { LoginView };

