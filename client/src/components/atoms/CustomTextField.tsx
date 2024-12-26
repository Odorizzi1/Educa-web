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
          color: "#d9d9d9",
          "&.Mui-focused": {
            color: `${COLORS.Secondary}`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `${COLORS.Secondary}`,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: `${COLORS.Secondary}`,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${COLORS.Secondary}`,
            transition: "all 0.3s ease-in-out",
          },
          borderRadius: "15px",
          height: "50px",
        },
        input: {
          "&:focus": {
            outline: "none",
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
