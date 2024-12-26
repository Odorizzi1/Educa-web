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
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Box>
        <Typography fontWeight={500} fontSize={"32px"} fontFamily={"Montserrat"}> Crie sua conta</Typography>
        <Typography fontWeight={500} fontSize={"18px"} fontFamily={"Montserrat"}>   Insira os dados abaixo para começar a aprender!</Typography>
      </Box>
      <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"10px"}>

        <Typography > Nome de usuário</Typography>
        <TextField
          label="Insira seu nome de usuário"
          name="name"
          value={formData.name}
          onChange={onInputChange}
          fullWidth
        />
        <Typography >E-mail</Typography>
        <TextField
          placeholder="Insira seu email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          fullWidth
        />
        <Typography >Senha</Typography>
        <TextField
          placeholder="Insira sua senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={onInputChange}
          fullWidth
        />
      </Box>
      {loading ? <CircularProgress />

        :
        <Button onClick={onClick}> Criar nova conta </Button>}

    </Box>

  );
};

export default FormUser;
