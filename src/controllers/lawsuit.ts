import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/lawsuit";

export async function getAll(_: Request, res: Response) {
  const lawsuits = await service.getAll();
  res.status(httpStatus.OK).send(lawsuits);
}

export async function getAllSum(_: Request, res: Response) {
  const sum = await service.getAllSum();
  res.status(httpStatus.OK).send(sum);
}
