import { getRepository, createQueryBuilder } from "typeorm";

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

export async function getClientsAndLawSuits(queryParams: any) {
  const query = await createQueryBuilder(Client)
    .select("client")
    .from(Client, "client")
    .leftJoinAndMapMany(
      "client.lawsuit",
      Lawsuit,
      "lawsuit",
      'lawsuit."clientId" = client.id'
    );

  const sameOrigin = queryParams["same-origin"];
  if (sameOrigin) query.andWhere("lawsuit.stateId = client.stateId");

  return query.getMany();
}
