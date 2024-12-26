import { Button, createTheme, ThemeProvider, ButtonProps } from "@mui/material";
import { COLORS } from "../utils/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
        contained: {
          fontWeight: "300",
          backgroundColor: `${COLORS.Secondary}`,
          fontFamily: "Poppins, sans-serif",
          borderRadius:"15px",
          height:"50px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: `${COLORS.Secondary}`,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
            color: "white"
          },
        },
      },
    },
  },
}
);

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button style={{ fontFamily: "Poppins" }} {...props} fullWidth variant="contained"></Button>
    </ThemeProvider>
  );
};

export { CustomButton };
