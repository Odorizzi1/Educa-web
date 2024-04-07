import { Box } from "@mui/material";
import { Button, TextField } from "../../atoms";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type InputLogin = {
  user: string;
  password: string;
};

const LoginFields = () => {
  const { handleSubmit, control } = useForm<InputLogin>();

  const onSubmit: SubmitHandler<InputLogin> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="423px"
        height="382px"
        // borderRadius="10px"
        // boxShadow="3px 3px 10px 1px rgba(0, 0, 0, 0.25);"
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
            name="user"
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
