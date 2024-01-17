import { Box } from "@mui/material";
import { Button, TextField } from "../../components/atoms";

const StudentFormView = () => {
  return (
    <Box>
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box  display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Box gap={"20px"} width={"100%"} display={"flex"}>
            <TextField variant="standard" />
            <TextField variant="standard" />
          </Box>
          <Box gap={"20px"} width={"100%"} display={"flex"}>
            <TextField variant="standard" />
            <TextField variant="standard" />
          </Box>
          <Box width={"100%"}>
            <Button>Cadastrar aluno</Button>
          </Box>
        </Box>
        <Box height={"475px"}>
          <img src="/cuate.svg" />
        </Box>
      </Box>
    </Box>
  );
};

export { StudentFormView };
