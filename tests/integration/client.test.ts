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

afterAll(async () => {
  await cleanDB();
  await endConnection();
});

describe("GET /client", () => {
  it("Retorna todos os clientes", async () => {
    const response = await agent.get("/api/client");
    expect(response.body).toEqual([
      {
        id: 1,
        name: "Empresa A",
        cnpj: "000000000001",
        stateId: 19,
      },
      {
        id: 2,
        name: "Empresa B",
        cnpj: "000000000002",
        stateId: 25,
      },
    ]);
  });
});

describe("GET /client/:clientId/state/:stateId/average", () => {
  it('Retorna a média do valor dos processos no Rio de Janeiro para o Cliente "Empresa A"', async () => {
    const response = await agent.get("/api/client/1/state/19/average");
    expect(response.body).toEqual({
      average: 11000000,
    });
  });
});

describe("GET /client/lawsuits", () => {
  it("Retorna a lista de processos no mesmo estado do cliente, para cada um dos clientes", async () => {
    const response = await agent.get("/api/client/lawsuits?same-origin=true");
    expect(response.body).toEqual([
      {
        id: 1,
        name: "Empresa A",
        cnpj: "000000000001",
        stateId: 19,
        lawsuit: [
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
            id: 4,
            clientId: 1,
            stateId: 19,
            number: "00004CIVELRJ",
            value: 2000000,
            created_at: "2007-11-10T02:00:00.000Z",
            status: false,
          },
        ],
      },
      {
        id: 2,
        name: "Empresa B",
        cnpj: "000000000002",
        stateId: 25,
        lawsuit: [
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
        ],
      },
    ]);
  });
});
