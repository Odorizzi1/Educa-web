import { Box, Typography } from "@mui/material";
import { COLORS } from "../../utils/colors";

interface SelectCoursesProps {
  icon: string;
  course: string;
  onClick: () => void;
}
const SelectCourses = ({ icon, course, onClick }: SelectCoursesProps) => {
  return (
    <div style={{cursor:"pointer", width:"100%"}} onClick={onClick}>
      <Box
        width={"100%"}
        height={"87px"}
        borderRadius={"20px"}
        border={"2px solid #EFEEFC"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"#3A5A40"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // bgcolor={`${COLORS.Secondary}`}
          borderRadius={"18px"}
          width={"100px"}
          height={"100%"}
        >
          <Box
            width={"60px"}
            height={"60px"}
            borderRadius={"18px"}
            bgcolor={"white"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <i
              style={{ fontSize: "32px", color: `${COLORS.Secondary}` }}
              className="material-icons"
            >
              {icon}
            </i>
          </Box>
        </Box>
        <Typography
          color={"white"}
          variant="body1"
          style={{ fontFamily: "rubik" }}
          lineHeight={"150%"}
          fontSize={"16px"}
          textAlign={"start"}
        >
          {course}
        </Typography>

        <i
          style={{ fontSize: "32px", color: `white` }}
          className="material-icons"
        >
          chevron_right
        </i>
      </Box>
    </div>
  );
};

export default SelectCourses;
