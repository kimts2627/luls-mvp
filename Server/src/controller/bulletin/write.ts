import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Member } from '../../database/entity/users';
import { InsertBulletin } from '../../utils/InsertBulletin';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  const { title, content } = req.body;

  const userinfo = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.school', 'School')
    .innerJoinAndSelect('member.city', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();

  await InsertBulletin({ title: title, content: content, userinfo: userinfo })
    .then((result: any) => {
      res.status(201).send(result);
    })
    .catch((err: any) => {
      res.status(400).send(err);
    });
};
