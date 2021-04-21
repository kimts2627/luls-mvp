import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Attendance, Member } from '../../database/entity/users';

export default async (req: Request, res: Response) => {
  const attendance = await getManager()
    // .createQueryBuilder(Member, 'member')
    // .innerJoinAndSelect('member.attendance', 'attendance')
    // .getMany();
    .createQueryBuilder(Attendance, 'attendance')
    .innerJoinAndSelect('attendance.Member', 'mem_att')
    .innerJoinAndSelect('mem_att.Member', 'member')
    .getMany();

  res.send(attendance);
};
