import { Container } from "inversify";

import { PrismaClient } from "@prisma/client";
import { TeacherRepository } from "./repositories/TeacherRepository/TeacherRepository";
import { TeacherService } from "../service/teacherService/TeacherService";
import LoginService from "../service/login/LoginService";
import LoginController from "../controller/login/LoginController";

const container = new Container();

container
  .bind<PrismaClient>("PrismaClient")
  .toConstantValue(new PrismaClient());

container.bind<TeacherRepository>("TeacherRepository").to(TeacherRepository);
container.bind<TeacherService>("TeacherService").to(TeacherService);
container.bind<LoginService>("LoginService").to(LoginService);
container.bind<LoginController>("LoginController").to(LoginController);
export default container;
