import { Request, Response } from "express";
import TeacherService from "../../service/teachers/TeacherService";

class TeacherController {
  getUsers(req: Request, res: Response) {
    const users = TeacherService.getUsers();
    res.json(users);
  }

  createUser(req:Request,res:Response){
    const user = TeacherService.createUser();
    res.json(user);
  }
}

export = new TeacherController();
