import { Request, Response } from "express";
import { inject } from "inversify";
import { TeacherService } from "../../service/teacherService/TeacherService";

export class TeacherController {
  private teacherService: TeacherService;
  constructor(@inject("TeacherService") teacherService: TeacherService) {
    this.teacherService = teacherService;
  }
  public async getTeachers(req: Request, res: Response) {
    const teachers = await this.teacherService.findAllTeachers();
    res.json(teachers);
  }
}
