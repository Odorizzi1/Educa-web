import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

interface CustomTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  initialState?: any;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
}

export const CustomTable: React.FC<CustomTableProps> = (props) => {
  return <DataGrid {...props} />;
};
