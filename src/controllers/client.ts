import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/client";

export async function getAll(_: Request, res: Response) {
  const clients = await service.getAll();
  res.status(httpStatus.OK).send(clients);
}

export async function getAverageById(req: Request, res: Response) {
  const clientId = parseInt(req.params.clientId);
  const stateId = parseInt(req.params.stateId);

  if (!clientId || !stateId) res.sendStatus(httpStatus.BAD_REQUEST);

  const average = await service.getAverageById(clientId, stateId);
  res.status(httpStatus.OK).send({ average });
}
