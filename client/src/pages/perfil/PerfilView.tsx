import { Box, Typography } from "@mui/material";
import HeaderPerson from "../../components/organisms/headerPerson/HeaderPerson";
import BoxDialog from "../../components/organisms/boxDialog/BoxDialog";
import Courses from "../../components/templates/courses/Courses";
const PerfilView = () => {
  
  
  
  return (
    <Box
    bgcolor={"#4F3C8E"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      gap={"40px"}
      padding={"20px 0px"}
    >
      <HeaderPerson />

      <BoxDialog text="Conteúdos novos diariamente, aprender nunca foi tão divertido!" />

      <Courses />
    </Box>
  );
};

export { PerfilView };
