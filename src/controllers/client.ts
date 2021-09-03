import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/client";
import ClienteInterface from "../interfaces/Client";
import schema from "../schemas/createNewClient";

export async function register(req: Request, res: Response) {
  const client: ClienteInterface = req.body;
  if (!client.name || !client.cnpj || !client.stateId)
    return res.sendStatus(httpStatus.BAD_REQUEST);

  const validation = schema.validate(client);
  if (validation.error) return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);

  await service.register(client);
  res.sendStatus(httpStatus.CREATED);
}

export async function getAll(_: Request, res: Response) {
  const clients = await service.getAll();
  res.status(httpStatus.OK).send(clients);
}

export async function getAverageById(req: Request, res: Response) {
  const clientId = parseInt(req.params.clientId);
  const stateId = parseInt(req.params.stateId);

  if (!clientId || !stateId) return res.sendStatus(httpStatus.BAD_REQUEST);

  const average = await service.getAverageById(clientId, stateId);
  res.status(httpStatus.OK).send({ average });
}

export async function getClientsAndLawSuits(req: Request, res: Response) {
  const clientsAndLawsuits = await service.getClientsAndLawSuits(req.query);
  res.status(httpStatus.OK).send(clientsAndLawsuits);
}
