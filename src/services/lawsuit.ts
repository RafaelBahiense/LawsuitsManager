import { getRepository } from "typeorm";

import Lawsuit from "../entities/Lawsuit";

export async function getAll() {
  return await getRepository(Lawsuit).find();
}

export async function getAllSum() {
  return await getRepository(Lawsuit)
    .createQueryBuilder("lawsuit")
    .select("SUM(lawsuit.value)", "sum")
    .where("lawsuit.status = true")
    .getRawOne();
}
