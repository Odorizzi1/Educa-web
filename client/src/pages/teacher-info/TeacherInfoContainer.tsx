import { useEffect } from "react";
import { TeacherInfoView } from "./TeacherInfoView";
import { getAllTeachers } from "../../resources/API/TeacherService/TeacherService";

const TeacherInfoContainer = () => {
  useEffect(()=>{
    const fetchData = async () => {
        try {
          const teachers = await getAllTeachers();
          console.log(teachers); // Registra os dados no console
        } catch (error) {
          console.error('Erro ao obter professores:', error);
        }
      };
  
      fetchData(); // Chama a função assíncrona
  },[])
  
  
    return <TeacherInfoView />;
};
export { TeacherInfoContainer };
