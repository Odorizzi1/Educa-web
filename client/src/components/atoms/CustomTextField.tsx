import TextField, { TextFieldProps } from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "../utils/colors";

type CustomTextFieldProps = TextFieldProps;

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#d9d9d9", // Cor da label padrão
          "&.Mui-focused": {
            color: `${COLORS.Secondary}`, // Cor da label no foco
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `${COLORS.Secondary}`, // Cor padrão da borda
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: `${COLORS.Secondary}`, // Cor no hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${COLORS.Secondary}`, // Cor no foco (forçando o estilo)
            transition: "all 0.3s ease-in-out", // Suavizando a transição
          },
        },
        input: {
          "&:focus": {
            outline: "none", // Remove qualquer outline padrão
          },
        },
      },
    },
  },
});

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props} fullWidth variant="outlined" />
    </ThemeProvider>
  );
};

export { CustomTextField };
