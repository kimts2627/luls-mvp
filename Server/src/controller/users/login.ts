require('dotenv').config();
import { getManager } from 'typeorm';
import { Member, School, Location } from '../../database/entity';
import { Request, Response } from 'express';
import { redisCheck } from '../../utils/redisCheck';

export default async (req: Request, res: Response) => {
  const email = res.locals.email;
  // email로 유저 정보 조회
  const userInfo = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.School_id', 'School')
    .innerJoinAndSelect('member.City', 'Location')
    // .innerJoinAndSelect(School, 'school', 'school.id = member.School_id')
    // .innerJoinAndSelect(Location, 'location', 'location.id = member.City')
    // .innerJoinAndSelect('member.City', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();
  // 유저 정보가 있을 시
  if (userInfo) {
    res.status(200).send(userInfo);
  }
  // 유저 정보가 없을 때
  else {
    res.status(401).send({ message: 'Login Failed' });
  }
};
