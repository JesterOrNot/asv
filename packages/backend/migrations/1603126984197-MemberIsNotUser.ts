import {MigrationInterface, QueryRunner} from "typeorm";

export class MemberIsNotUser1603126984197 implements MigrationInterface {
    name = 'MemberIsNotUser1603126984197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "team_member" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "position" character varying NOT NULL, CONSTRAINT "UQ_fd69f2e0642adcc8568de1f3281" UNIQUE ("name"), CONSTRAINT "PK_649680684d72a20d279641469c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "ip_record" ADD "belongsToId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '"2020-10-19T17:03:05.759Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '"2020-10-19T17:03:05.759Z"'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '"2020-10-19T17:03:05.759Z"'`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '"2020-10-19T17:03:05.774Z"'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ADD CONSTRAINT "FK_f74b404569c82c9ddb6b516847e" FOREIGN KEY ("belongsToId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ip_record" DROP CONSTRAINT "FK_f74b404569c82c9ddb6b516847e"`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '2020-10-19 16:51:24.124'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '2020-10-19 16:51:24.107'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '2020-10-19 16:51:24.152'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-10-19 16:51:24.152'`);
        await queryRunner.query(`ALTER TABLE "ip_record" DROP COLUMN "belongsToId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name")`);
        await queryRunner.query(`DROP TABLE "team_member"`);
    }

}
