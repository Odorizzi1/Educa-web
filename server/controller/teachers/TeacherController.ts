import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TeacherService } from "../../service/teacherService/TeacherService";
import { ITeacher } from "../../domain/contracts/ITeacher";
import { Teacher } from "../../domain/teacher/teacher";

@injectable()
export class TeacherController implements ITeacher {
  private teacherService: TeacherService;
  constructor(@inject("TeacherService") teacherService: TeacherService) {
    this.teacherService = teacherService;
  }
  async getTeachers(req: Request, res: Response): Promise<Teacher[]> {
    const teachers = await this.teacherService.findAllTeachers();
    return teachers;
  }
}
