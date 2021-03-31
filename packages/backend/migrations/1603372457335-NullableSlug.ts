import {MigrationInterface, QueryRunner} from "typeorm";

export class NullableSlug1603372457335 implements MigrationInterface {
    name = 'NullableSlug1603372457335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '"2020-10-22T13:14:18.878Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '"2020-10-22T13:14:18.878Z"'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '"2020-10-22T13:14:18.878Z"'`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "slug" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "UQ_6fce32ddd71197807027be6ad38"`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '"2020-10-22T13:14:18.893Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '2020-10-19 19:12:07.177'`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "UQ_6fce32ddd71197807027be6ad38" UNIQUE ("slug")`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "slug" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '2020-10-19 19:12:07.164'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '2020-10-19 19:12:07.163'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-10-19 19:12:07.163'`);
    }

}
