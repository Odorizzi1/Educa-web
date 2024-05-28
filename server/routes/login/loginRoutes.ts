import { Response, Request, Router } from "express";
import LoginController from "../../controller/login/LoginController";
import LoginService from "../../service/login/LoginService";

const Loginrouter = Router();

const auth_jwt = process.env.AUTH_JWT;

if (auth_jwt === undefined) {
  console.error("Erro: AUTH_JWT não definido.");
  process.exit(1);
}
const authService = new LoginService(auth_jwt);
const authController = new LoginController(authService);

Loginrouter.post("/login", (req: Request, res: Response) =>
  authController.login(req, res)
);

export default Loginrouter;
