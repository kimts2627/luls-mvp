import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Member } from '../../database/entity';

export default async (req: Request, res: Response) => {
  // const test = await getManager()
  //   .createQueryBuilder(Member, 'member')
  //   .innerJoinAndSelect('member.bulletin', 'member__bullet_in')
  //   .leftJoinAndSelect('member_bullet_in.Bulletin_id', 'bullet_in')
  //   .getMany();
  // console.log(test);
  // res.send(test);
  console.log(req.body);
};
