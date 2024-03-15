import express, { Router } from "express";
import { TeacherController } from "../../controller/teachers/TeacherController";
import container from "../../data/inversify.config";
container;

const TeacherRouter: Router = express.Router();
const teacherController = container.resolve(TeacherController);

TeacherRouter.get("/", async (req, res) => {
  await teacherController.getTeachers(req, res);
});
TeacherRouter.post("/createTeacher", async (req, res) => {
  await teacherController.createTeachers(req, res);
});

export default TeacherRouter;
