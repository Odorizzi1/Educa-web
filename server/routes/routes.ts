import express from "express";
import TeacherRouter from "./teachers/TeacherRoutes";
const router = express.Router();

router.use("/teacher", TeacherRouter);

export default router;
