import { Box, Typography } from "@mui/material";


const HeaderPerson = ({ userName }: { userName: string }) => {
  return (
    <Box
      padding={"22px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box gap={"10px"} display={"flex"} alignItems={"center"} textAlign={"center"}>
        <Box display={"flex"}>
          <Typography
            color={"black"}
            variant="body1"
            style={{ fontFamily: "Montserrat" }}
            lineHeight={"150%"}
            fontSize={"22px"}
            textAlign={"start"}
          >
            Bem vindo,
          </Typography>
          <Typography
            color={"black"}
            variant="body1"
            style={{ fontFamily: "Montserrat" }}
            lineHeight={"150%"}
            fontSize={"22px"}
            marginLeft={"8px"}
          >
            {userName ? userName : ""}!
          </Typography>
        </Box>


      </Box>

    </Box>
  );
};

export default HeaderPerson;
