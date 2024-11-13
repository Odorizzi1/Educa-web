import { Box, Divider, TextField, Typography } from "@mui/material";
import { Button } from "../../atoms";

interface FormLoginProps {
    user: string;
    setUser: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    executeLogin: () => void;
    setExistAccount: (value: boolean) => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ user, setUser, password, setPassword, executeLogin, setExistAccount }) => {
    return (
        <>

            <TextField
                label="Usuário"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                fullWidth
            />
            <TextField
                label="Senha"
                type="password"
                value={password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => executeLogin()}>Login</Button>

            <Box width="100%" display="flex" alignItems="center" justifyContent="center" gap="8px" mt={2}>
                <Divider style={{ flex: 1 }} />
                <Typography fontFamily="Poppins">ou</Typography>
                <Divider style={{ flex: 1 }} />
            </Box>

            <Button style={{ backgroundColor: "white", color: "black" }} onClick={() => setExistAccount(false)} fullWidth>
                Crie sua conta
            </Button>
        </>
    );
};

export default FormLogin;
