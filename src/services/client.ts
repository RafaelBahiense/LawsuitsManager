import { getRepository } from "typeorm";

import Client from "../entities/Client";
import Lawsuit from "../entities/Lawsuit";

export async function getAll() {
  return await getRepository(Client).find();
}

export async function getAverageById(clientId: number, stateId: number) {
  const { sum, count } = await getRepository(Lawsuit)
    .createQueryBuilder("lawsuit")
    .select("SUM(lawsuit.value)", "sum")
    .addSelect("COUNT(lawsuit)", "count")
    .where("lawsuit.clientId = :clientId", { clientId })
    .andWhere("lawsuit.stateId = :stateId", { stateId })
    .getRawOne();
  const average = sum / count;
  return average;
}
