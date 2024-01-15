import { Box } from "@mui/material";
import { CardRegister } from "../../components/molecules/cardRegister";

interface RegisterViewProps{
  onClick: ()=> void;
}

const RegisterView = ({onClick}: RegisterViewProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <CardRegister onClick={onClick} />
    </Box>
  );
};
export { RegisterView };
