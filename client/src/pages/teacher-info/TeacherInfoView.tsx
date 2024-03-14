import { Box } from "@mui/material";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Button, Table } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

interface TeacherInfoViewProps {
  data: GridRowsProp;
  columns: GridColDef[];
}

export const TeacherInfoView = ({ data, columns }: TeacherInfoViewProps) => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        gap={"100px"}
        height={"70%"}
        width={"70%"}
        display={"flex"}
        flexDirection={"column"}
        position={"absolute"}
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
