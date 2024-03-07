import express from "express";

import Loginrouter from "./login/loginRoutes";
import TeacherRouter from "./teacher/TeacherRoutes";
const router = express.Router();

router.use("/teacher", TeacherRouter);
router.use("/auth", Loginrouter);

export default router;
