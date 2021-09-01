import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/client";

export async function getAll(_: Request, res: Response) {
  const clients = await service.getAll();
  res.status(httpStatus.OK).send(clients);
}
