require('dotenv').config();
import { getManager } from 'typeorm';
import { Member } from '../../database/entity';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  const email = res.locals.email;
  // email로 유저 정보 조회
  const userInfo = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.School_Name', 'School')
    .innerJoinAndSelect('member.Location', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();
  // 유저 정보가 있을 시
  if (userInfo) {
    res.status(200).send(userInfo);
  }
  // 유저 정보가 없을 때
  else {
    /**
     * 추가 회원가입 정보 입력 페이지로 리다이렉트
     * res.redirect(추가 입력 페이지) */
    // Member.insertInfo(userInfo);
    res.status(400).send({ message: 'Login Failed' });
  }
};
