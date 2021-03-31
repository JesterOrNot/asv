import {MigrationInterface, QueryRunner} from "typeorm";

export class TeamMemberImage1603134725568 implements MigrationInterface {
    name = 'TeamMemberImage1603134725568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team_member" ADD "image" character varying NOT NULL DEFAULT 'https://via.placeholder.com/150x150'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '"2020-10-19T19:12:07.163Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '"2020-10-19T19:12:07.163Z"'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '"2020-10-19T19:12:07.164Z"'`);
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '"2020-10-19T19:12:07.177Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ALTER COLUMN "date" SET DEFAULT '2020-10-19 17:03:05.774'`);
        await queryRunner.query(`ALTER TABLE "ip_record" ALTER COLUMN "date" SET DEFAULT '2020-10-19 17:03:05.759'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastEditedAt" SET DEFAULT '2020-10-19 17:03:05.759'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT '2020-10-19 17:03:05.759'`);
        await queryRunner.query(`ALTER TABLE "team_member" DROP COLUMN "image"`);
    }

}
