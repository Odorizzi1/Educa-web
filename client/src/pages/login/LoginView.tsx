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
  <Box display="flex" width="100%" height="100vh" justifyContent="space-between" alignItems="center">
    <Box width="40vw" bgcolor="#4F3C8E" height="100vh" />
    <Box width="60vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box width="30vw" height="50vh" display="flex" borderRadius="10px" alignItems="center" justifyContent="center" border="1px solid #A9A9A9">
        {existAccount ? (
          <Box display="flex" gap="15px" flexDirection="column" alignItems="center">
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
          <Box justifyContent="center" width="100%" height="100%" border="1px solid black" display="flex" gap="15px" flexDirection="column" alignItems="center">
            <FormUser onClick={handleSubmit} formData={formData} onInputChange={handleInputChange} />
          </Box>
        )}
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Box>
  </Box>
);

export default LoginView;
