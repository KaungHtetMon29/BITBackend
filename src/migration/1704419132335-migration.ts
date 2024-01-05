import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1704419132335 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `content_owner` (`idx`, `name`) VALUES (1, 'ခင္ေဆြဦး'), (2, 'တိုးထက္'), (3, 'မင္းကိုႏိုင္'), (4, 'မိုးမိုး (အင္းလ်ား)'), (5, ' ႏိုင္ေဇာ္ (Lazy Club)'), (6, 'Synergy Publishing'), (7, 'သန္း၀င္းလိႈင္'), (8, 'ရာျပည့္'), (9, 'ခ်စ္ဦးညိဳ'), (10, 'အၾကည္ေတာ္')"
    );
    await queryRunner.query(
      "INSERT INTO `publisher` (`idx`, `name`) VALUES (1, 'ခင္ေဆြဦး'), (2, 'ဆင္ျဖဴကၽြန္း ေက်ာ္လႈိင္ဦး'), (3, 'မင္းကိုႏိုင္'), (4, 'မိုးမိုး (အင္းလ်ား)'), (5, ' ႏိုင္ေဇာ္ (Lazy Club)'), (6, ' ႏိုင္းႏိုင္းစေန'), (7, 'သန္း၀င္းလိႈင္'), (8, 'ရာျပည့္ဦးစိုးညြန္႕'), (9, 'ခ်စ္ဦးညို'), (10, 'အၾကည္ေတာ္')"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
