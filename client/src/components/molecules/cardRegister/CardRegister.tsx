import { Box, Typography } from "@mui/material";
import { Button } from "../../atoms";

const CardRegister = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="307px"
      height="468px"
      borderRadius="4px"
      boxShadow="0px 0px 0px 1px #E0E0E0"
    >
      <Box bgcolor="#eaeaea">
        <img width="200px" src="/girlStudy.png" />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        textAlign="left"
        height="100%"
        padding="20px"
        gap="20px"
      >
        <Typography
          fontFamily="roboto"
          fontSize="20px"
          fontWeight="500"
          variant="h1"
          textAlign="left"
          color="#645d5d"
        >
          Aluno
        </Typography>
        <Typography
          fontFamily="roboto"
          fontSize="16px"
          fontWeight="400"
          variant="h1"
          textAlign="left"
          color="#868585"
        >
          Realize seu cadastro e fique por dentro do lançamento de suas notas.
        </Typography>
        <Button>Cadastrar</Button>
      </Box>
    </Box>
  );
};

export { CardRegister };
