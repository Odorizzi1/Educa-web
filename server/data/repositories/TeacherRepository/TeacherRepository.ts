import { injectable, inject } from "inversify";
import { PrismaClient } from "@prisma/client";
import { Teacher } from "../../../domain/teacher/teacher";

@injectable()
export class TeacherRepository {
  private prisma: PrismaClient;

  constructor(@inject("PrismaClient") prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll() {
    const allTeachers = await this.prisma.teachers.findMany();
    return allTeachers;
  }

  async create(teacher: Teacher): Promise<Teacher> {
    const createTeacher = await this.prisma.teachers.create({
      data: teacher,
    });
    return createTeacher;
  }
}
