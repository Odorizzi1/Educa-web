import { useEffect, useState, useRef } from "react";
import { TeacherInfoView } from "./TeacherInfoView";
import { getAllTeachers } from "../../resources/API/TeacherService/TeacherService";
import { GridColDef } from "@mui/x-data-grid";

const TeacherInfoContainer = () => {
  const [data, setData] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchData();
      hasFetchedData.current = true;
    }
  }, []);

  const fetchData = async () => {
    try {
      const teachers = await getAllTeachers();
      setData(teachers);
    } catch (error) {
      console.error("Erro ao obter professores:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 70 },
    { field: "name", headerName: "Nome do professor", width: 200 },
    {
      field: "email",
      headerName: "Email",
      width: 160,
    },
  ];

  return <TeacherInfoView columns={columns} data={data} />;
};
export { TeacherInfoContainer };
