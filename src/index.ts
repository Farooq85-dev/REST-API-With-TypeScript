import dotenv from "dotenv";
import connectDB from "./db/index";
import { app } from "./app";

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

// Connecting To Database
connectDB();

// Listening App
app.listen(process.env.PORT || 3000, () => {
  console.log(`---- Server is running at ${process.env.PORT} ----`);
});
