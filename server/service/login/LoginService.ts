import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { injectable } from "inversify";
const prisma = new PrismaClient();
@injectable()
class LoginService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  async authenticateUser(email: string, password: string): Promise<boolean> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return false;
    }

    const passwordMatch = password === user.password;

    return passwordMatch;
  }

  generateToken(username: string) {
    return jwt.sign({ username }, this.secretKey, { expiresIn: "1h" });
  }
}

export default LoginService;
