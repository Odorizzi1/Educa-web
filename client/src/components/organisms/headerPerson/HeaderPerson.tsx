import { Box, Typography } from "@mui/material";

const HeaderPerson = () => {
  return (
    <Box
      padding={"12px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={320}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          color={"white"}
          variant="body1"
          style={{ fontFamily: "rubik" }}
          lineHeight={"150%"}
          fontSize={"16px"}
          textAlign={"start"}
        >
          Bem vindo!
        </Typography>
        <Typography
          color={"white"}
          variant="body1"
          style={{ fontFamily: "rubik" }}
          lineHeight={"150%"}
          fontSize={"22px"}
        >
          em construção
        </Typography>
      </Box>
      <Box
        borderRadius={"50px"}
        bgcolor={"white"}
        width={"40px"}
        height={"40px"}
      ></Box>
    </Box>
  );
};

export default HeaderPerson;
