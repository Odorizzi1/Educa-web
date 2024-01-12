import TeacherController from "../../controller/teachers/TeacherController";
import { Router } from "express";

const TeacherRouter = Router();

TeacherRouter.get("/users", TeacherController.getUsers);
TeacherRouter.post("/createUser", TeacherController.createUser);

export default TeacherRouter;
