"use client"
import { Box } from "@mui/material";
import { LoginFields } from "../../components/molecules/login";

const LoginView = () => {
  
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="100px"
    >
        <Box width={"500px"} height={"475px"}>
        <img src="/cuate.svg"/>

        </Box>
      <LoginFields />
    </Box>
  );
};
export { LoginView };
