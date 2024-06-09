import { useEffect } from "react";
import Typed from "typed.js";
import { Box, Typography } from "@mui/material";
import { LoginFields } from "../../components/molecules/login";

const LoginView = () => {
  useEffect(() => {
    const options = {
      strings: ["Insira o texto aqui"],
      typeSpeed: 100,
    };

    const typed = new Typed("#typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box display={"flex"} width={"100%"} height={"100vh"}>
      <Box
        height="100%"
        display="flex"
        justifyContent="space-evenly"
        bgcolor="#4F3C8E"
        color="white"
        width="40vw"
      >
        <Typography fontSize={"25px"} fontFamily="Roboto">
          <span id="typed-text"></span>
        </Typography>
      </Box>
      <Box width={"60vw"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
       <LoginFields />
      </Box>
    </Box>
  );
};

export { LoginView };
