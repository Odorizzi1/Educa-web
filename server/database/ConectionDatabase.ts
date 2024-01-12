import mysql, { Connection } from "mysql2";

let connection: Connection | null = null;

export const conectarBancoDeDados = async () => {
  try {
    if (!connection) {
      const config = {
        user: "root",
        password: "Xtz.,w10",
        host: "localhost",
        database: "educa-web",
        port: 3309,
      };

      connection = await mysql.createConnection(config);
    }

    return connection;
  } catch (error: any) {
    console.error("Erro ao conectar ao banco de dados:", error.message);
    throw error;
  }
};
