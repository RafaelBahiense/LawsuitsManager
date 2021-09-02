import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/client";

export async function getAll(_: Request, res: Response) {
  try {
    const clients = await service.getAll();
    res.status(httpStatus.OK).send(clients);
  } catch (e) {
    console.log(e);
  }
}

export async function getAverageById(req: Request, res: Response) {
  try {
    const clientId = parseInt(req.params.clientId);
    const stateId = parseInt(req.params.stateId);

    if (!clientId || !stateId) return res.sendStatus(httpStatus.BAD_REQUEST);

    const average = await service.getAverageById(clientId, stateId);
    res.status(httpStatus.OK).send({ average });
  } catch (e) {
    console.log(e);
  }
}
