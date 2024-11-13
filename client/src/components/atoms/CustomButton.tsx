import { Button, createTheme, ThemeProvider, ButtonProps } from "@mui/material";
 // Certifique-se de que a fonte foi importada

 const theme = createTheme({
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
          fontWeight:"300",
          backgroundColor: "#7A41E0",
          fontFamily: "Poppins, sans-serif",
          textTransform: "none",
        },
      },
    },
  },
});

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button style={{fontFamily:"Poppins"}} {...props} fullWidth variant="contained"></Button>
    </ThemeProvider>
  );
};

export { CustomButton };
