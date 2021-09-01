import { getRepository } from "typeorm";

import Lawsuit from "../entities/Lawsuit";

export async function getAll() {
  return await getRepository(Lawsuit).find();
}
