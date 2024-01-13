import { Button, createTheme, ThemeProvider } from "@mui/material";

interface CustomButtonProps {
  children: string;
}

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

const CustomButton = ({ children }: CustomButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button fullWidth variant="contained">
        {children}
      </Button>
    </ThemeProvider>
  );
};

export { CustomButton };
