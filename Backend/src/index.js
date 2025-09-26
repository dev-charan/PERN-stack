import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import Userrouter from "./routes/user.routes.js";
import { errorHanling } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// test route
app.use(errorHanling)
app.use("/api", Userrouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
