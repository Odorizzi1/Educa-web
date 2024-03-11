import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes";

import bodyParser from "body-parser";
import { connectDb } from "./data/database/ConectionDatabase";
import { register, collectDefaultMetrics, Counter } from "prom-client";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    const metrics = await register.metrics();
    res.end(metrics);
  } catch (error) {
    console.error("Erro ao obter métricas:", error);
    res.status(500).send("Erro ao obter métricas");
  }
});

app.use(cors());

app.use(bodyParser.json());

connectDb()
  .then(() => {
    app.use("/", router);

    app.listen(PORT, () => {
      console.log(`Servidor Express rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error.message);
  });
