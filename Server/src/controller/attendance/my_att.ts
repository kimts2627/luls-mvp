import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Attendance, Member } from '../../database/entity/users';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  // 멤버 별 날짜 출석 현황
  const attendance = await getManager()
    .createQueryBuilder(Member, 'member')
    .innerJoinAndSelect('member.mem_att', 'mem_att')
    .innerJoinAndSelect('mem_att.att', 'attendance')
    .where('member.email = :email', { email: email })
    .getMany();

  // 날짜 별 멤버 출석 현황
  // .createQueryBuilder(Attendance, 'attendance')
  // .innerJoinAndSelect('attendance.Member', 'mem_att')
  // .innerJoinAndSelect('mem_att.Member', 'member')
  // .getMany();
  if (attendance) {
    res.status(200).send({ attendance: attendance });
  } else {
    res.status(401).send({ message: 'Not Attendance List' });
  }
};
