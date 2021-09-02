import supertest from "supertest";

import "../../src/config/env";
import app, { init } from "../../src/app";
import seed from "../../src/seeders/seeder";
import { cleanDB, endConnection } from "../utils/database";

const agent = supertest(app);
jest.setTimeout(10000);

beforeAll(async () => {
  await init();
  await cleanDB();
  await endConnection();
  await seed(true);
  await init();
});

//beforeEach(async () => {});

afterAll(async () => {
  await cleanDB();
  await endConnection();
});

describe("GET /lawsuit", () => {
  it("Retorna todos os processos", async () => {
    const response = await agent.get("/api/lawsuit");
    expect(response.body).toEqual([
      {
        id: 1,
        clientId: 1,
        stateId: 19,
        number: "00001CIVELRJ",
        value: 20000000,
        created_at: "2007-10-10T03:00:00.000Z",
        status: true,
      },
      {
        id: 2,
        clientId: 1,
        stateId: 25,
        number: "00002CIVELSP",
        value: 10000000,
        created_at: "2007-10-20T02:00:00.000Z",
        status: true,
      },
      {
        id: 3,
        clientId: 1,
        stateId: 13,
        number: "00003TRABMG",
        value: 1000000,
        created_at: "2007-10-30T02:00:00.000Z",
        status: false,
      },
      {
        id: 4,
        clientId: 1,
        stateId: 19,
        number: "00004CIVELRJ",
        value: 2000000,
        created_at: "2007-11-10T02:00:00.000Z",
        status: false,
      },
      {
        id: 5,
        clientId: 1,
        stateId: 25,
        number: "00005CIVELSP",
        value: 3500000,
        created_at: "2007-11-15T02:00:00.000Z",
        status: true,
      },
      {
        id: 6,
        clientId: 2,
        stateId: 19,
        number: "00006CIVELRJ",
        value: 2000000,
        created_at: "2007-05-01T03:00:00.000Z",
        status: true,
      },
      {
        id: 7,
        clientId: 2,
        stateId: 19,
        number: "00007CIVELRJ",
        value: 70000000,
        created_at: "2007-06-02T03:00:00.000Z",
        status: true,
      },
      {
        id: 8,
        clientId: 2,
        stateId: 25,
        number: "00008CIVELSP",
        value: 50000,
        created_at: "2007-07-03T03:00:00.000Z",
        status: false,
      },
      {
        id: 9,
        clientId: 2,
        stateId: 25,
        number: "00009CIVELSP",
        value: 3200000,
        created_at: "2007-08-04T03:00:00.000Z",
        status: true,
      },
      {
        id: 10,
        clientId: 2,
        stateId: 4,
        number: "00010TRABAM",
        value: 100000,
        created_at: "2007-09-05T03:00:00.000Z",
        status: false,
      },
    ]);
  });

  it("a lista de Processos de Setembro de 2007", async () => {
    const response = await agent.get("/api/lawsuit?year=2007&month=9");
    expect(response.body).toEqual([
      {
        id: 10,
        clientId: 2,
        stateId: 4,
        number: "00010TRABAM",
        value: 100000,
        created_at: "2007-09-05T03:00:00.000Z",
        status: false,
      },
    ]);
  });
});

describe("GET /lawsuit/sum", () => {
  it("Retorna a soma dos processos ativos", async () => {
    const response = await agent.get("/api/lawsuit/sum");
    expect(response.body).toEqual({
      sum: "108700000",
    });
  });
});

describe("GET /lawsuit/count", () => {
  it("Retorna o Número de processos com valor acima de R$ 100.000,00", async () => {
    const response = await agent.get("/api/lawsuit/count?gt-value=10000000");
    expect(response.body).toEqual({
      count: 2,
    });
  });
});
