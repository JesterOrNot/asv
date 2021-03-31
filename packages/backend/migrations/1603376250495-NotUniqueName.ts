import {MigrationInterface, QueryRunner} from "typeorm";

export class NotUniqueName1603376250495 implements MigrationInterface {
    name = 'NotUniqueName1603376250495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '"2020-10-22T14:17:31.965Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '"2020-10-22T14:17:31.965Z"'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '"2020-10-22T14:17:31.966Z"'`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "UQ_dedfea394088ed136ddadeee89c"`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "slug" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '"2020-10-22T14:17:32.332Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '2020-10-22 13:14:18.893'`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "slug" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "UQ_dedfea394088ed136ddadeee89c" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '2020-10-22 13:14:18.878'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '2020-10-22 13:14:18.878'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-10-22 13:14:18.878'`);
    }

}
