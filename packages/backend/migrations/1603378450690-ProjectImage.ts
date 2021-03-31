import {MigrationInterface, QueryRunner} from "typeorm";

export class ProjectImage1603378450690 implements MigrationInterface {
    name = 'ProjectImage1603378450690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "mainImage" character varying NOT NULL DEFAULT 'https://via.placeholder.com/150x150'`);
        await queryRunner.query(`ALTER TABLE "project" ADD "images" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '"2020-10-22T14:54:12.253Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '"2020-10-22T14:54:12.253Z"'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '"2020-10-22T14:54:12.253Z"'`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "description" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '"2020-10-22T14:54:12.637Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '2020-10-22 14:17:32.332'`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "description" SET DEFAULT '[]'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '2020-10-22 14:17:31.966'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '2020-10-22 14:17:31.965'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-10-22 14:17:31.965'`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "mainImage"`);
    }

}
