import { Button, createTheme, ThemeProvider, ButtonProps } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#4F3C8E",
        },
      },
    },
  },
});

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} fullWidth variant="contained"></Button>
    </ThemeProvider>
  );
};

export { CustomButton };
