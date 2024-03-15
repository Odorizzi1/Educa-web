import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TeacherService } from "../../service/teacherService/TeacherService";
import { ITeacher } from "../../domain/contracts/ITeacher";
import { Counter, register } from "prom-client";
import { TeacherModel } from "../../model/TeacherModel";
import { Teacher } from "../../domain/teacher/teacher";

@injectable()
export class TeacherController implements ITeacher {
  private teacherService: TeacherService;
  private requestCounter: Counter;

  constructor(@inject("TeacherService") teacherService: TeacherService) {
    this.teacherService = teacherService;

    this.requestCounter = new Counter({
      name: "myapp_requests_total",
      help: "Número total de requisições ao aplicativo.",
    });

    register.registerMetric(this.requestCounter);
  }

  async getTeachers(req: Request, res: Response): Promise<void> {
    try {
      const teachers = await this.teacherService.findAllTeachers();

      this.requestCounter.inc();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async createTeachers(
    req: Request,
    res: Response
  ): Promise<Teacher | undefined> {
    const { name, documentNumber,subject } = req.body;

   const data ={
    name,
    documentNumber,
    subject
   }
    try {
      const createTeacher = await this.teacherService.createTeacher(data);
      return createTeacher;
    } catch (error) {
      console.log("Erro ao criar professor:", error);
    }
  }
}
