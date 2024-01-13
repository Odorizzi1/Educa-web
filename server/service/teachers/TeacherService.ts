import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class TeacherService {
  getTeachers() {
    return [
      { id: 1, name: "Usuário 1" },
      { id: 2, name: "Usuário 2" },
    ];
  }

  async createTeacher() {
    return await prisma.user.create({
      data: {
        name: "jonathan",
        email: "trojonathan@hotmail.com",
        password:"Xtz.,w10"
      },
    });
  }
}

export = new TeacherService();
