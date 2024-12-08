import { Box } from "@mui/material";
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
  loading:boolean,
}

const LoginView: React.FC<LoginViewProps> = ({
  user,
  setUser,
  password,
  setPassword,
  existAccount,
  setExistAccount,
  formData,
  handleInputChange,
  executeLogin,
  handleSubmit,
  loading
}) => (
  <Box bgcolor={"#efffbe"} display="flex" width="100%" height="100vh" justifyContent="space-evenly" alignItems="center">
    <Box gap={"20px"} padding={"0px 25px"} bgcolor={"white"} flexDirection={"column"} width="400px" height="640px" display="flex" borderRadius="10px" alignItems="center" justifyContent="center">
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
        {existAccount ? 
         <img
         style={{
           width: "250px",
           objectFit: "contain",
           borderRadius: "40px",
         }}
         src="/logo1.svg" /> :undefined
      }
       
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
            loading={loading}
          />
        </Box>
      ) : (
        <Box justifyContent="space-evenly" width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
          <FormUser loading={loading} onClick={handleSubmit} formData={formData} onInputChange={handleInputChange} />
        </Box>
      )}
    </Box>
  </Box>
);

export default LoginView;
