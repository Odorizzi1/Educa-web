import express from "express";
const app = express();
import dotenv from "dotenv";
import router from "./routes/routes";
import { conectarBancoDeDados } from "./database/ConectionDatabase";
import bodyParser from "body-parser";
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
conectarBancoDeDados()
  .then(() => {
    app.use("/", router);

    app.listen(PORT, () => {
      console.log(`Servidor Express rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error.message);
  });
