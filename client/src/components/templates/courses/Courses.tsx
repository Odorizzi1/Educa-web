import { Box, Typography } from "@mui/material";
import SelectCourses from "../../organisms/selectCourses/SelectCourses";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <Box
      alignItems={"center"}
      padding={"24px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"16px"}
      borderRadius={"30px"}
      bgcolor={"white"}
    >
    <Typography textAlign={"left"} fontWeight={600} fontFamily={"Montserrat"} fontSize={"26px"}>Vamos estudar? todo dia temos perguntas novas para você praticar.</Typography>
    <Typography textAlign={"left"} fontWeight={500} fontFamily={"Montserrat"} fontSize={"22px"}>Selecione um tema para começar a aprender:</Typography>



      <SelectCourses
        onClick={() => navigate("/start/matematica")}
        course="Matemática"
        icon="calculate"
      />
      <SelectCourses
        onClick={() =>  navigate("/start/historia")}
        course="História"
        icon="history_edu"
      />
      <SelectCourses
        onClick={() => navigate("/start/portugues")}
        course="Português"
        icon="library_books"
      />
    </Box>
  );
};
export default Courses;
