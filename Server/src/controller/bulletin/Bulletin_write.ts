import { Request, Response } from 'express';
import { getConnection, getManager } from 'typeorm';
import { BulletIn, Member } from '../../database/entity';
import Member_BulletIn from '../../database/entity/relations/Member_BulletIn';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  const { title, content } = req.body;

  const userinfo = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.School_id', 'School')
    .innerJoinAndSelect('member.City', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();

  if (userinfo) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Insert Location Table
      const bulletin = await queryRunner.manager
        .save(BulletIn, {
          title: title,
          content: content,
          school: userinfo.School_id.Name,
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
      console.log(userinfo.id);
      await queryRunner.manager
        .save(Member_BulletIn, {
          Bulletin_id: bulletin.id,
          Members_Id: userinfo.id,
          Status: false,
        })
        .catch((err) => {
          console.log(err);
          return err;
        });

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      res.status(400).send('땡');
    } finally {
      await queryRunner.release();
      res.status(201).send('Signup Success');
    }
  }
};
