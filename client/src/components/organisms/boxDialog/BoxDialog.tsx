import { Box, Typography } from "@mui/material";

interface BoxDialogProps {
  text: string;
}
const BoxDialog = ({ text }: BoxDialogProps) => {
  
  
    return (
    <Box
      sx={{
        width: 320,
        height: "232px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: "12px",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 10.0px ) saturate( 140% )",
        p: 3,
        color: "#fff",
        justifyContent:"center",
        display:"flex",
        alignItems:"center"
      }}
    >
        <Typography
          textAlign={"center"}
          color={"white"}
          variant="body1"
          style={{ fontFamily: "rubik" }}
          lineHeight={"150%"}
          fontWeight={"500"}
          fontSize={"20px"}
        >

      {text}
        </Typography>
    </Box>
  );
};
export default BoxDialog;
