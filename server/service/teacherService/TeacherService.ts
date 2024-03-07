import { inject, injectable } from "inversify";
import { TeacherRepository } from "../../data/repositories/TeacherRepository/TeacherRepository";

@injectable()
export class TeacherService {
  private teacherRepository: TeacherRepository;

  constructor(
    @inject("TeacherRepository") teacherRepository: TeacherRepository
  ) {
    this.teacherRepository = teacherRepository;
  }
  public async findAllTeachers(){
   return await this.teacherRepository.findAll()
  }

}
