
import { Request, Response } from "express";
import LoginService from "../../service/login/LoginService";

class LoginController {
  private authService: LoginService;

  constructor(authService: LoginService) {
    this.authService = authService;
  }

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const isAuthenticated = await this.authService.authenticateUser(email, password);

      if (isAuthenticated) {
        const token = this.authService.generateToken(email);
        res.json({ token });
      } else {
        res.status(401).json({ message: "Credenciais inválidas" });
      }
    } catch (error) {
      console.error("Erro durante a autenticação:", error);
      res.status(500).json({ message: "Erro durante a autenticação" });
    }
  }
}

export default LoginController;
