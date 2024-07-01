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
      width={"328px"}
      borderRadius={"30px"}
      bgcolor={"white"}
    >
      <Box width={"324px"}>
        <Typography
          textAlign={"start"}
          color={"black"}
          variant="body1"
          style={{ fontFamily: "rubik" }}
          lineHeight={"150%"}
          fontWeight={"500"}
          fontSize={"20px"}
        >
          Vamos estudar?
        </Typography>
        <Typography
          textAlign={"start"}
          color={"black"}
          variant="body1"
          style={{ fontFamily: "rubik" }}
          lineHeight={"150%"}
          fontWeight={"300"}
          fontSize={"14px"}
        >
          Todos os dias perguntas novas para você praticar!
        </Typography>
      </Box>
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
