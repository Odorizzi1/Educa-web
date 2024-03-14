import { Box } from "@mui/material";
import { Button, Select, TextField } from "../../components/atoms";

const TeacherFormView = () => {
  const options = [
    { label: "Matemática", value: "Matemática" },
    { label: "Português", value: "Português" },
    { label: "ciências", value: "ciências" },
  ];
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width={"600px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"50px"}
      >
        <Box display={"flex"} gap={"50px"}>
          <TextField variant="standard" />
          <TextField variant="standard" />
        </Box>
        <Box width={"270px"}>
          <Select options={options} />
        </Box>
        <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
          <Box width={"400px"}>
            <Button>Cadastrar novo professor</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export { TeacherFormView };
