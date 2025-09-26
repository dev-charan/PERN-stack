// db.js
import dotenv from "dotenv";
dotenv.config(); // ensure env vars are loaded BEFORE Pool

import pkg from "pg";
const { Pool } = pkg;

console.log("DB in db.js:", process.env.DB_USER, process.env.DB_PASSWORD);

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

pool.on("connect", () => console.log("✅ Database connected"));

export default pool;
