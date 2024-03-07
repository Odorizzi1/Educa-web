import { Request, Response } from "express";
import { Teacher } from "../teacher/teacher";

export interface ITeacher {
  getTeachers(req: Request, res: Response): Promise<void>;
}
