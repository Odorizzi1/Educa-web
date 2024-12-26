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
  loading: boolean,
  isMobile: boolean;
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
  loading,
  isMobile,
  error
}) => (
  <Box textAlign={"start"} bgcolor={"#FFFFFF"} display="flex" width="100%" height="100vh" justifyContent="space-evenly" alignItems="center">

    <Box padding={isMobile ? "20px" : "0px"} height={"500px"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} width={"465px"}>
      {existAccount ?
        <>

          <Box>
            <Typography fontSize={"32px"} fontFamily={"Montserrat"} fontWeight={500}>Bem vindo!</Typography>
            <Typography fontSize={"18px"} fontFamily={"Montserrat"} fontWeight={500} >Entre na sua conta abaixo para começar.</Typography>
          </Box>
          <Box>
            <FormLogin
              user={user}
              setUser={setUser}
              password={password}
              setPassword={setPassword}
              executeLogin={executeLogin}
              loading={loading}
              setExistAccount={setExistAccount}
              error={error}
            />

          </Box>
        </>
        : <FormUser
          formData={formData}
          onInputChange={handleInputChange}
          onClick={handleSubmit}
          loading={loading}
        />
      }
      <Box width={"100%"} display={"flex"} alignItems={"start"}>
        <img
          style={{
            width: "200px",
            height: "100px",
            objectFit: "contain",
            borderRadius: "40px",
            margin: "-15px"
          }}
          src="/pergunta-logo2.png" />
      </Box>
    </Box>

    {!isMobile ?
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"596px"} height={"738px"} borderRadius={"49px"} bgcolor={"#3A5A40"} >
        <img
          style={{
            width: "480px",
            height: "523px",
            objectFit: "contain",
            borderRadius: "40px",
          }}
          src="/boy-study.png" />
      </Box>
      : undefined
    }

  </Box>
);

export default LoginView;
