import { Request, Response } from 'express';
import { getConnection, getManager } from 'typeorm';
import { Member_BulletIn } from '../../database/entity/relations';
import { BulletIn } from '../../database/entity/bulletin';
import { Member } from '../../database/entity/users';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  const { title, content } = req.body;

  const userinfo = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.school', 'School')
    .innerJoinAndSelect('member.city', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();

  if (userinfo) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Insert Location Table
      const bulletin = await queryRunner.manager.save(BulletIn, {
        title: title || null,
        content: content || null,
        school: userinfo.school.Name || null,
      });

      await queryRunner.manager.save(Member_BulletIn, {
        Bulletin_id: bulletin || null,
        Members_Id: userinfo || null,
        Status: false,
      });

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      res.status(400).send({ message: 'Wirte Failed' });
    } finally {
      await queryRunner.release();
      res.status(201).send({ message: 'Write Success' });
    }
  }
};
