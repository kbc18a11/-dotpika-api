import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1623293567085 implements MigrationInterface {
    name = 'Initialize1623293567085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `template_pixel_art` (`id` varchar(36) NOT NULL, `name` varchar(20) NOT NULL COMMENT 'ドット絵の名前', `exampleImage` varchar(1024) NOT NULL COMMENT 'ドット絵の点灯例画像', `createdAt` datetime(6) NOT NULL COMMENT '作成日時' DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL COMMENT '更新日時' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_6e355e1d3bc7b074d24d6c89c7` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_6e355e1d3bc7b074d24d6c89c7` ON `template_pixel_art`");
        await queryRunner.query("DROP TABLE `template_pixel_art`");
    }

}
