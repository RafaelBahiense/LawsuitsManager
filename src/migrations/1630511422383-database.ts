import {MigrationInterface, QueryRunner} from "typeorm";

export class database1630511422383 implements MigrationInterface {
    name = 'database1630511422383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lawsuit" ("id" SERIAL NOT NULL, "clientId" integer NOT NULL, "stateId" integer NOT NULL, "number" character varying NOT NULL, "value" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "status" boolean NOT NULL, CONSTRAINT "UQ_06ce9bf5f3c641902d7b821e0b0" UNIQUE ("number"), CONSTRAINT "PK_1273e965705426fb64d1779c05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "stateId" integer NOT NULL, CONSTRAINT "UQ_ebf1bb18c08139bbdf229244d80" UNIQUE ("cnpj"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lawsuit" ADD CONSTRAINT "FK_92558c96eaf839f746c8214b3ef" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lawsuit" ADD CONSTRAINT "FK_1ba6cdc2f6176c96a0e04f16c0c" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_1727e486647cc251dde2ad76386" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_1727e486647cc251dde2ad76386"`);
        await queryRunner.query(`ALTER TABLE "lawsuit" DROP CONSTRAINT "FK_1ba6cdc2f6176c96a0e04f16c0c"`);
        await queryRunner.query(`ALTER TABLE "lawsuit" DROP CONSTRAINT "FK_92558c96eaf839f746c8214b3ef"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "state"`);
        await queryRunner.query(`DROP TABLE "lawsuit"`);
    }

}
