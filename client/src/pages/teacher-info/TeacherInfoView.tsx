import { Box } from "@mui/material";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Table } from "../../components/atoms";

interface TeacherInfoViewProps {
  data: GridRowsProp;
  columns: GridColDef[];
}

export const TeacherInfoView = ({ data, columns }: TeacherInfoViewProps) => {
  return (
    <Box display={"flex"} gap={"50px"} alignItems={"center"}  width={"100%"} height={"100%"}>
      <Box height={"100%"} width={"400px"} bgcolor={"#EBE5F6"}>

      </Box>
      
      <Box height={400} width={"60%"}>
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
