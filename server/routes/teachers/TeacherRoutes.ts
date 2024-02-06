import TeacherController from "../../controller/teachers/TeacherController";
import { Router } from "express";

const TeacherRouter = Router();

TeacherRouter.get("/teachers", TeacherController.getTeachers);
TeacherRouter.post("/createUser", TeacherController.createTeacher);

export default TeacherRouter;
