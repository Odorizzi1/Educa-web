import { Box } from "@mui/material";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Table } from "../../components/atoms";

interface TeacherInfoViewProps {
  data: GridRowsProp;
  columns: GridColDef[];
}

export const TeacherInfoView = ({ data, columns }: TeacherInfoViewProps) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100%"}>
      <Box height={400} width={"50%"}>
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
