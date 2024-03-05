import { Container } from "inversify";

import { PrismaClient } from "@prisma/client";
import { TeacherRepository } from "./repositories/TeacherRepository/TeacherRepository";
import { TeacherService } from "../service/teacherService/TeacherService";

const container = new Container();

container
  .bind<PrismaClient>("PrismaClient")
  .toConstantValue(new PrismaClient());

container.bind<TeacherRepository>("TeacherRepository").to(TeacherRepository);
container.bind<TeacherService>("TeacherService").to(TeacherService);

export default container;
