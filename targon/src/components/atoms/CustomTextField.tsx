import TextField, { TextFieldProps } from "@mui/material/TextField";

type CustomTextFieldProps = TextFieldProps;

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  return <TextField {...props} fullWidth />;
};

export { CustomTextField };
