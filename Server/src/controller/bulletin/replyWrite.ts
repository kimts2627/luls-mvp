import { Request, Response } from 'express';
import { getManager, getConnection } from 'typeorm';
import Bulletin_Re from '../../database/entity/relations/Bulletin_Re';
import BulletIn_Reply from '../../database/entity/bulletin/Bulletin_Reply';
import { Member } from '../../database/entity/users';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  const { id, content } = req.body;

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
      const bulletin_reply = await queryRunner.manager.save(BulletIn_Reply, {
        member: userinfo,
        content: content,
      });

      await queryRunner.manager.save(Bulletin_Re, {
        bulletin: id,
        bulletin_re_id: bulletin_reply,
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
