import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "../services/lawsuit";
import LawsuitInterface from "../interfaces/Lawsuit";

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
    const {
      clientId,
      stateId,
      number,
      value,
      created_at,
      status,
    }: LawsuitInterface = req.body;
    if (!clientId || !stateId || !number || !value || !created_at || !status)
      return res.sendStatus(httpStatus.BAD_REQUEST);

    await service.register({
      clientId,
      stateId,
      number,
      value,
      created_at,
      status,
    });
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
