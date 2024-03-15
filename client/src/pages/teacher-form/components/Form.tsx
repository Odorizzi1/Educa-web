import { Box } from "@mui/material";
import { Button, Select, TextField } from "../../../components/atoms";
import { Option } from "../../../components/atoms/CustomSelect";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormTeacherProps {
  options: Option[];
}
interface IFormInput {
  name: string;
  documentNumber: string;
  subject: string;
}

export const FormTeacher = ({ options }: IFormTeacherProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width={"600px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"50px"}
      >
        <Box display={"flex"} gap={"50px"}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextField {...field} variant="standard" />}
          />

          <Controller
            name="documentNumber"
            control={control}
            render={({ field }) => <TextField {...field} variant="standard" />}
          />
        </Box>
        <Box width={"270px"}>
          <Controller
            name="subject"
            control={control}
            render={({ field }) => <Select {...field} options={options} />}
          />
        </Box>
        <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
          <Box width={"400px"}>
            <Button type="submit">Cadastrar novo professor</Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
