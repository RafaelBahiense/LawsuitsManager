import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/lawsuit";
import LawsuitInterface from "../interfaces/Lawsuit";
import schema from "../schemas/createNewLawsuit";

export async function getAll(req: Request, res: Response) {
  try {
    const lawsuits = await service.getAll(req.query);
    res.status(httpStatus.OK).send(lawsuits);
  } catch (e) {
    console.log(e);
  }
}

export async function register(req: Request, res: Response) {
  try {
    const lawsuit: LawsuitInterface = req.body;
    if (
      !lawsuit.clientId ||
      !lawsuit.stateId ||
      !lawsuit.number ||
      !lawsuit.value ||
      !lawsuit.created_at ||
      !lawsuit.status
    )
      return res.sendStatus(httpStatus.BAD_REQUEST);

    const validation = schema.validate(lawsuit);
    if (validation.error)
      return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);

    await service.register(lawsuit);
    res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    console.log(e);
  }
}

export async function getAllSum(_: Request, res: Response) {
  try {
    const sum = await service.getAllSum();
    res.status(httpStatus.OK).send(sum);
  } catch (e) {
    console.log(e);
  }
}

export async function getCountByQuery(req: Request, res: Response) {
  try {
    const count = await service.getCountByQuery(req.query);
    res.status(httpStatus.OK).send({ count });
  } catch (e) {
    console.log(e);
  }
}
