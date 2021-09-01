import { getRepository } from "typeorm";

import Client from "../entities/Client";

export async function getAll() {
  return await getRepository(Client).find();
}
