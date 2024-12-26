import { Box, CircularProgress, Typography } from "@mui/material";
import { Button, TextField } from "../../atoms";

interface FormLoginProps {
    user: string;
    setUser: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    executeLogin: () => void;
    setExistAccount: (value: boolean) => void;
    loading: boolean,
    error: string
}

const FormLogin: React.FC<FormLoginProps> = ({ user,
    setUser,
    password,
    setPassword,
    executeLogin,
    setExistAccount,
    loading,
    error }) => {
    return (
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"30px"}>

            <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography>Usuário</Typography>
                <TextField
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    fullWidth
                    placeholder="Insira seu nome de usuário"
                />
            </Box>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography>Senha</Typography>
                <TextField
                    type="password"
                    value={password}
                    fullWidth
                    placeholder="Insira sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    helperText={error}
                />
            </Box>
            {loading ? <CircularProgress /> : <Button onClick={() => executeLogin()}>Entrar</Button>}

            <span
                style={{
                    cursor: "pointer",
                    color: "black",
                    fontFamily: "Montserrat"
                }}
                onClick={() => setExistAccount(false)}
            >
                Não tem uma conta? Crie uma!
            </span>
        </Box>
    );
};

export default FormLogin;
