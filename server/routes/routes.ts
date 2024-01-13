import express from "express";
import TeacherRouter from "./teachers/TeacherRoutes";
import Loginrouter from "./login/loginRoutes";
const router = express.Router();

router.use("/teacher", TeacherRouter);
router.use("/auth", Loginrouter);

export default router;
