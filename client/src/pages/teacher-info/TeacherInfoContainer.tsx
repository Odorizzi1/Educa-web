import { useEffect, useState } from "react";
import { TeacherInfoView } from "./TeacherInfoView";
import { getAllTeachers } from "../../resources/API/TeacherService/TeacherService";
import { GridColDef } from "@mui/x-data-grid";

const TeacherInfoContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachers = await getAllTeachers();
        console.log(data, "o que vem");
        setData(teachers);
      } catch (error) {
        console.error("Erro ao obter professores:", error);
      }
    };

    fetchData();
  }, []);

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
