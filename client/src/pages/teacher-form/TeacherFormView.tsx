import { Box } from "@mui/material";
import { FormTeacher } from "./components/form";


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
      alignItems={"center"}
    >
      <FormTeacher options={options} />
    </Box>
  );
};
export { TeacherFormView };
