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

export async function getCountByQuery(queryParams: any) {
  const query = getRepository(Lawsuit)
    .createQueryBuilder("lawsuit")
    .where(`lawsuit.value IS NOT NULL`);

  const greaterThanValue = parseInt(queryParams["gt-value"]);
  if (greaterThanValue)
    query.andWhere("lawsuit.value > :greaterThanValue", { greaterThanValue });

  const lessThanValue = parseInt(queryParams["lt-value"]);
  if (lessThanValue)
    query.andWhere("lawsuit.value < :lessThanValue", { lessThanValue });

  return await query.getCount();
}
