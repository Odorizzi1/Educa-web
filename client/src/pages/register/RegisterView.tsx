import { Box } from "@mui/material";
import { CardRegister } from "../../components/molecules/cardRegister";

const RegisterView = () => {
  return (
    <Box  width="100%" height="100%" display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
      <CardRegister />
 
    </Box>
  );
};
export { RegisterView };
