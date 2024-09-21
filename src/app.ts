import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";

//Dotenv Configs
dotenv.config({ path: "./.env" });

// Creating Express App
const app = express();

// Using Cors To Allow Request From Any Origin
type CorsType = {
  origin: string;
  credentials: boolean;
};

const CorsOptions: CorsType = {
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true,
};

//Cors Configs
app.use(cors(CorsOptions));

// Using Express JSON To Parse Data
app.use(express.json({ limit: "15kb" }));

// Using Cookie Parser To Parse Cookies
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//Main Routes
app.use("/api/v1/", router);

// Exporting App
export { app };
