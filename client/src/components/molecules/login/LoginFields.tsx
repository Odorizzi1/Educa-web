import { Box } from "@mui/material";
import { Button, TextField } from "../../atoms";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { login } from "../../../resources/API/LoginService/LoginService";
import { useNavigate } from "react-router-dom";

type InputLogin = {
  email: string;
  password: string;
};

const LoginFields = () => {
  const { handleSubmit, control } = useForm<InputLogin>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<InputLogin> = async (data) => {
    try {
      const _login = await login(data);

      if (_login) {
        navigate("/registro");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="423px"
        height="382px"
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
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} placeholder="E-mail" />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} placeholder="Senha" type="password" />
            )}
          />
        </Box>

        <Box width="323px" height="43px">
          <Button type="submit">Login</Button>
        </Box>
      </Box>
    </form>
  );
};

export { LoginFields };
