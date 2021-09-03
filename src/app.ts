import express, { Application } from "express";
import "express-async-errors";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./config/database";
import mainRouter from "./routers/mainRouter";
import errorHandler from "./middlewares/errorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.send("OK!");
});
app.use("/api", mainRouter);

app.use(errorHandler);

export async function init() {
  await connectDatabase();
}

export default app;
