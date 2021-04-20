import { Request, Response } from 'express';
import { nextTick } from 'node:process';
import { getManager } from 'typeorm';
import { Member } from '../database/entity/users';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  console.log(email);
  const userinfo = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.school', 'School')
    .innerJoinAndSelect('member.city', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();

  if (userinfo.permission === 'admin') {
    res.redirect(307, '/bulletin/write_admin');
  } else {
    res.redirect(307, '/bulletin/write_common');
  }
};
