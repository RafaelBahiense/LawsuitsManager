import { getRepository, getConnection } from "typeorm";

import State from "../../src/entities/State";
import Client from "../../src/entities/Client";
import Lawsuit from "../../src/entities/Lawsuit";

export async function cleanDB() {
  await getRepository(State).query(
    `TRUNCATE TABLE state RESTART IDENTITY CASCADE`
  );
  await getRepository(Client).query(
    `TRUNCATE TABLE client RESTART IDENTITY CASCADE`
  );
  await getRepository(Lawsuit).query(
    `TRUNCATE TABLE lawsuit RESTART IDENTITY CASCADE`
  );
}

export async function endConnection() {
  await getConnection().close();
}
