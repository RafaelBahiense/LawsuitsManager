import { getRepository } from "typeorm";

import Lawsuit from "../entities/Lawsuit";

export async function getAll(queryParams: any) {
  const query = getRepository(Lawsuit)
    .createQueryBuilder("lawsuit")
    .where(`lawsuit.created_at IS NOT NULL`);

  const year = queryParams.year;
  if (year) query.andWhere('EXTRACT(year FROM "created_at") = :year', { year });

  const month = queryParams.month;
  if (month)
    query.andWhere('EXTRACT(month FROM "created_at") = :month', { month });

  const day = queryParams.day;
  if (day) query.andWhere('EXTRACT(day FROM "created_at") = :day', { day });

  return query.getMany();
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
