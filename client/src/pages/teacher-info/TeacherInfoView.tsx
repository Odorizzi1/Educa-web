import { Box, TextField } from "@mui/material";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Button, Table } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

interface TeacherInfoViewProps {
  data: GridRowsProp;
  columns: GridColDef[];
}

// const list = [{
//   name:"augusto", lastName:"curry", age:25,

// },
// {
//   name:"sergio", lastName:"malandro", age:22
// }]

// function filter(name?:string, age?:number): [{name:string,lastName:string,age:number}] | {name:string,lastName:string, age:number} | null{

//   if(name){
//     return  list.some(objeto => Object.values(objeto).includes(name))
//   }

//   // se passar o nome, deve retornar a lista só com os nomes inseridos
// // se passar o age,deve retornar a lista só com as idades inseridos
// // se passar nome e age, retorna o que der match com os 2 parametros

// //se não achar ninguém, retorna null
// // se você achar 1 registro, retorne o objeto
// // se retornar mais de 1 retorne o array

// }

export const TeacherInfoView = ({ data, columns }: TeacherInfoViewProps) => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      // justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      gap={"50px"}
    >
      <Box bgcolor={"#4F3C8E"} width={"400px"} height={"100%"}></Box>

      <Box
        gap={"100px"}
        height={"70%"}
        width={"70%"}
        display={"flex"}
        flexDirection={"column"}
        // position={"absolute"}
      >
        <Box width={"100%"} display={"flex"} justifyContent={"end"}>
          <Box width={"200px"}>
            <Button onClick={() => navigate("/form-professor")}>
              Novo Professor
            </Button>
          </Box>
        </Box>

        <Table
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};
