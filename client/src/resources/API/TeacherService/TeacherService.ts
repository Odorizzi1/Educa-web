import axios from "axios";

export interface Teacher {
  name: string;
  documentNumber: string;
  subject: string;
}

const getAllTeachers = async () => {
  try {
    const getTeachers = await axios.get("http://localhost:3000/teacher/");
    return getTeachers.data;
  } catch (err) {
    throw new Error("not found teachers");
  }
};

const createTeacher = async (data: Teacher) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/teacher/createTeacher",
      data
    );

    return response;
  } catch (error) {
    console.error("Erro ao criar professor:", error);
    return null;
  }
};

export { getAllTeachers, createTeacher };
