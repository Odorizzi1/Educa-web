import {Divider, TextField, Typography } from "@mui/material";
import { Button } from "../../atoms";

interface FormLoginProps {
    user: string;
    setUser: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    executeLogin: () => void;
    setExistAccount:(value: boolean) => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ user, setUser, password, setPassword,executeLogin, setExistAccount}) => {
    return (
        <>
            <TextField
                label="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
             <Button onClick={() => executeLogin()}>Login</Button>

            <Divider style={{"width":"100%"}} />

            <Typography fontFamily={"Roboto"} color={"#A9A9A9"} fontSize={"12px"}> Não possui uma conta? crie agora!</Typography>
            <Button onClick={()=>setExistAccount(false)} fullWidth>
            Criar nova conta
            </Button>
        </>
    );
};

export default FormLogin;
