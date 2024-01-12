import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class TeacherService {
  getUsers() {
    return [
      { id: 1, name: "Usuário 1" },
      { id: 2, name: "Usuário 2" },
    ];
  }

  async createUser() {
    return await prisma.user.create({
      data: {
        name: "jonathan",
        email: "trojonathan@hotmail.com",
      },
    });
  }
}

export = new TeacherService();
