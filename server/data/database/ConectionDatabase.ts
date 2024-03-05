import mysql, { Connection, ConnectionOptions } from "mysql2";

let connection: Connection | null = null;

export const connectDb = async () => {
  try {
    if (!connection) {
      const config: ConnectionOptions = {
        user: process.env.USER_DB,
        password: process.env.PWD_DB,
        host: process.env.HOST_DB,
        database: process.env.DATABASE,
        port: parseInt(process.env.PORT_DB || "3309"),
      };

      connection = await mysql.createConnection(config);
    }

    return connection;
  } catch (error: any) {
    console.error("Erro ao conectar ao banco de dados:", error.message);
    throw error;
  }
};
