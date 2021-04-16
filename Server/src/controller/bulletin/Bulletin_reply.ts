import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { BulletIn, BulletIn_Reply, Member } from '../../database/entity';
import BulletIn_Re from '../../database/entity/relations/Bulletin_Re';

export default async (req: Request, res: Response) => {
  // 특정 게시글 댓글 목록
  //   const reply = await getManager()
  //     .createQueryBuilder(BulletIn_Reply, 'bullet_in_reply')
  //     .innerJoinAndSelect(
  //       BulletIn_Re,
  //       'bulletin_re',
  //       'bulletin_re.bulletin_re_id = bullet_in_reply.id'
  //     )
  //     .innerJoinAndSelect(
  //       BulletIn,
  //       'bulletin',
  //       'bulletin.reply = bulletin_re.bulletin_id'
  //     )
  //     .getMany();
  const reply = await getManager()
    .createQueryBuilder(BulletIn, 'bulletin')
    .leftJoinAndSelect('bulletin.id', 'bulletin_re')
    .leftJoinAndSelect('bulletin_re.bulletin_re_id', 'bulletin_reply')
    .orderBy({
      'bulletin.id': 'ASC',
      'bulletin_reply.id': 'ASC',
    })
    .getMany();

  // 특정 유저 댓글 목록
  // const reply = await getManager()
  // .createQueryBuilder(BulletIn_Reply, 'bulletin_reply')
  // .innerJoinAndSelect('bulletin_reply.member_id', 'member')
  // .getMany();

  res.send(reply);
};
