import { Box, CircularProgress, Typography } from "@mui/material";
import { Button, TextField } from "../../atoms";

interface FormUserProps {
  formData: {
    name: string;
    password: string;
    email: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  loading: boolean
}

const FormUser: React.FC<FormUserProps> = ({ formData, onInputChange, onClick, loading }) => {
  return (
    <>
      <Typography fontSize={"23px"} fontFamily={"Poppins"}> Crie sua conta</Typography>
      <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"10px"}>


        <TextField
          label="Insira seu nome de usuário"
          name="name"
          value={formData.name}
          onChange={onInputChange}
          fullWidth
        />
        <TextField
          label="Insira sua senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={onInputChange}
          fullWidth
        />
        <TextField
          label="Insira seu email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          fullWidth
        />
      </Box>
      {loading ? <CircularProgress />

        :
        <Button onClick={onClick}> Criar nova conta </Button>}

    </>

  );
};

export default FormUser;
