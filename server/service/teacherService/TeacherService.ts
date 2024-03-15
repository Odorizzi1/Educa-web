import { inject, injectable } from "inversify";
import { TeacherRepository } from "../../data/repositories/TeacherRepository/TeacherRepository";
import { Teacher } from "../../domain/teacher/teacher";

@injectable()
export class TeacherService {
  private teacherRepository: TeacherRepository;

  constructor(
    @inject("TeacherRepository") teacherRepository: TeacherRepository
  ) {
    this.teacherRepository = teacherRepository;
  }
  public async findAllTeachers() {
    return await this.teacherRepository.findAll();
  }
  public async createTeacher(data: Teacher): Promise<Teacher> {
    return await this.teacherRepository.create(data);
  }
}
