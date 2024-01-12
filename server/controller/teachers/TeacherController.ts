import { Request, Response } from "express";
import TeacherService from "../../service/teachers/TeacherService";

class TeacherController {
  getTeachers(req: Request, res: Response) {
    const users = TeacherService.getTeachers();
    res.json(users);
  }

  createTeacher(req:Request,res:Response){
    const user = TeacherService.createTeacher();
    res.json(user);
  }
}

export = new TeacherController();
