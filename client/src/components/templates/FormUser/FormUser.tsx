import { Box, TextField } from "@mui/material";
import { Button } from "../../atoms";

interface FormUserProps {
  formData: {
    name: string;
    password: string;
    email: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const FormUser: React.FC<FormUserProps> = ({ formData, onInputChange, onClick }) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"10px"}>
      <TextField
        label="Insira seu nome"
        name="name"
        value={formData.name}
        onChange={onInputChange}
      />
      <TextField
        label="Insira sua senha"
        name="password"
        type="password"
        value={formData.password}
        onChange={onInputChange}
      />
      <TextField
        label="Insira seu email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
      />
      <Button onClick={onClick}> Criar nova conta </Button>
    </Box>
  );
};

export default FormUser;
