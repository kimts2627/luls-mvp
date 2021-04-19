import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { BulletIn_Reply, Member } from '../../database/entity';
import BulletIn_Re from '../../database/entity/relations/Bulletin_Re';
import BulletIn from '../../database/entity/bulletin/BulletIn'

export default async (req: Request, res: Response) => {
  const {member_id} = req.body;
  // 모든 댓글 목록
    const reply = await getManager()
      .createQueryBuilder(BulletIn_Reply, 'bullet_in_reply')
      .innerJoinAndSelect(
        BulletIn_Re,
        'bulletin_re',
        'bulletin_re.bulletin_re_id = bullet_in_reply.id'
      )
      .innerJoinAndSelect('bulletin_re.bulletin_id', 'Bulletin')
      // .where('bullet_in_reply.member_id = :member_id', { member_id: member_id })
      .getMany();

  // 특정 유저 댓글 목록
  // const reply = await getManager()
  // .createQueryBuilder(BulletIn_Reply, 'bulletin_reply')
  // .innerJoinAndSelect('bulletin_reply.member_id', 'member')
  // .getMany();

  res.send(reply);
};
