import express, { Application } from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./config/database";
import mainRouter from "./routers/mainRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.send("OK!");
});

app.use("/api", mainRouter);

export async function init() {
  await connectDatabase();
}

export default app;
