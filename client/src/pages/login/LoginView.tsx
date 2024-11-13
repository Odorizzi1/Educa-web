import { Box, Typography } from "@mui/material";
import FormLogin from "../../components/templates/FormUser/FormLogin";
import FormUser from "../../components/templates/FormUser/FormUser";


interface LoginViewProps {
  user: string;
  setUser: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  error: string;
  existAccount: boolean;
  setExistAccount: (value: boolean) => void;
  formData: { name: string; password: string; email: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  executeLogin: () => void;
  handleSubmit: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  user,
  setUser,
  password,
  setPassword,
  error,
  existAccount,
  setExistAccount,
  formData,
  handleInputChange,
  executeLogin,
  handleSubmit,
}) => (
  <Box bgcolor={"#D8E7FE"} display="flex" width="100%" height="100vh" justifyContent="space-evenly" alignItems="center">
 <Box gap={"20px"} padding={"0px 25px"}  bgcolor={"white"} flexDirection={"column"}  width="400px" height="640px" display="flex" borderRadius="10px" alignItems="center" justifyContent="center">
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <img src="/title.png" />
        </Box>
        {existAccount ? (
          <Box width={"100%"} display="flex" gap="15px" flexDirection="column" alignItems="center">
            <FormLogin
              user={user}
              setUser={setUser}
              password={password}
              setPassword={setPassword}
              executeLogin={executeLogin}
              setExistAccount={() => setExistAccount(false)}
            />
          </Box>
        ) : (
          <Box justifyContent="space-evenly" width="100%" height="100%"display="flex"  flexDirection="column" alignItems="center">
            <FormUser onClick={handleSubmit} formData={formData} onInputChange={handleInputChange} />
          </Box>
        )}
        {error && <Typography color="error">{error}</Typography>}
      </Box>
  </Box>
);

export default LoginView;
