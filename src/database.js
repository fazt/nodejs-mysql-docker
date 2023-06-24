import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool({
  port: "3306",
  host: process.env.MYSQLDB_HOST,
  user: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
});

pool.on("connection", () => console.log("DB Connected!"));
