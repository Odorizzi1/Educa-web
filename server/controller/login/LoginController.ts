import { Request, Response } from "express";
import LoginService from "../../service/login/LoginService";
import { inject, injectable } from "inversify";

@injectable()
class LoginController {
  private authService: LoginService;

  constructor(@inject("LoginService") authService: LoginService) {
    this.authService = authService;
  }

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const isAuthenticated = await this.authService.authenticateUser(
        email,
        password
      );

      if (isAuthenticated) {
        const token = this.authService.generateToken(email);
        res.json({ token });
      } else {
        res.status(401).json({ message: "Credenciais inválidas" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro durante a autenticação" });
    }
  }
}

export default LoginController;
