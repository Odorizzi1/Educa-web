import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TeacherService } from "../../service/teacherService/TeacherService";
import { ITeacher } from "../../domain/contracts/ITeacher";

@injectable()
export class TeacherController implements ITeacher {
  private teacherService: TeacherService;

  constructor(@inject("TeacherService") teacherService: TeacherService) {
    this.teacherService = teacherService;
  }

  async getTeachers(req: Request, res: Response): Promise<void> {
    try {
      const teachers = await this.teacherService.findAllTeachers();

      res.json(teachers);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}
