import { Box } from "@mui/material";
import { Button, Link, TextField } from "../../atoms";

const LoginFields = () => {
  return (
    <Box
      width="423px"
      height="382px"
      borderRadius="10px"
      boxShadow="3px 3px 10px 1px rgba(0, 0, 0, 0.25);"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="column"
    >
      <Box
        gap="10px"
        display="flex"
        flexDirection="column"
        width="323px"
        height="38px"
      >
        <TextField placeholder="E-mail" />

        <TextField placeholder="Senha" type="password" />
        {/* Criar TextField de senha a parte com manipulações de state e valores nele separado */}
      </Box>

      <Box width="323px" height="43px">
        <Button> Login </Button>
      </Box>
    </Box>
  );
};
export { LoginFields };
