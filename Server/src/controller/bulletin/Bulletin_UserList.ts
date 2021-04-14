import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Member, Member_BulletIn, BulletIn } from '../../database/entity';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;
  console.log(email);
  const userinfo = await getManager()
    // .createQueryBuilder(Member_BulletIn, 'member_bullet_in')
    // .innerJoinAndSelect('member_bullet_in.Members_Id', 'Member')
    // .innerJoinAndSelect('member_bullet_in.Bulletin_id', 'bullet_in')
    // .where('member_bullet_in.Members_Id = :Email', { Email: email })
    // .getMany();

    // .createQueryBuilder(Member, 'member')
    // .innerJoinAndSelect('member.id', 'member_bullet_in')
    // // .innerJoinAndSelect(Member_BulletIn, 'member_bullet_in', 'member.id = member_bullet_in.Members_Id')
    // .innerJoinAndSelect('member_bullet_in.Bulletin_id', 'bullet_in')
    // .innerJoinAndSelect('member.School_id', 'School')
    // .innerJoinAndSelect('member.City', 'Location')
    // .where('member.Email = :Email', { Email: email })
    // .getOne();
    .createQueryBuilder(BulletIn, 'bulletin')
    .innerJoinAndSelect(
      Member_BulletIn,
      'member_bullet_in',
      'member_bullet_in.Bulletin_id = bulletin.id'
    )
    .innerJoinAndSelect(
      Member,
      'member',
      'member.id = member_bullet_in.Members_Id'
    )
    .where('member.Email = :Email', { Email: email })
    .getMany();
  res.send(userinfo);
};
