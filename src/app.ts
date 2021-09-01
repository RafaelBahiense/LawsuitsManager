import express, { Application } from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./config/database";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.send("OK!");
});

export async function init() {
  await connectDatabase();
}

export default app;
