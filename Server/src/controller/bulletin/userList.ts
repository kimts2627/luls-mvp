import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Member } from '../../database/entity/users';

export default async (req: Request, res: Response) => {
  const { email } = res.locals;

  // 해당 유저의 모든 정보와 작성한 게시글 데이터
  const userinfo = await getManager()
    .createQueryBuilder(Member, 'member')
    // 게시글
    .innerJoinAndSelect('member.bulletin', 'member_bullet_in')
    .innerJoinAndSelect('member_bullet_in.Bulletin_id', 'bullet_in')
    // 댓글
    .leftJoinAndSelect('bullet_in.bulletin_re', 'bulletin_reply')
    // .leftJoinAndSelect('bulletin_re.bulletin_re_id', 'bulletin_reply')
    // 학교 및 거주지 정보
    .innerJoinAndSelect('member.school', 'School')
    .innerJoinAndSelect('member.city', 'Location')
    .where('member.Email = :Email', { Email: email })
    .getOne();

  res.status(200).send(userinfo);
};
