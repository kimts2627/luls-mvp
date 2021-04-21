import escapeHtml from 'escape-html';
import { getConnection } from 'typeorm';
import { Member_BulletIn } from '../database/entity/relations';
import { BulletIn } from '../database/entity/bulletin';

type arg = {
  title: string;
  content: string;
  userinfo: any;
};

export const InsertBulletin: Function = async (options: arg) => {
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();
  console.log(options.content);
  try {
    // Insert Location Table
    const bulletin = await queryRunner.manager.save(BulletIn, {
      title: options.title || null,
      content: escapeHtml(options.content) || null,
      school: options.userinfo.school.Name || null,
    });

    await queryRunner.manager.save(Member_BulletIn, {
      Bulletin_id: bulletin || null,
      Members_Id: options.userinfo || null,
      Status: false,
    });

    await queryRunner.commitTransaction();
    return { message: 'Write Success' };
  } catch (err) {
    console.log(err);
    await queryRunner.rollbackTransaction();
    throw { message: 'Write Failed' };
  } finally {
    await queryRunner.release();
    return { message: 'Write Success' };
  }
};
