import axios from "axios";

const getAllTeachers = async () => {
  try {
    const getTeachers = await axios.get("http://localhost:3000/teacher/");
    return getTeachers.data;
  } catch (err) {
    throw new Error("not found teachers");
  }
};

export { getAllTeachers };
