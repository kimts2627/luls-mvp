import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { BulletIn, Bulletin_Re, BulletIn_Reply } from '../../database/entity';

export default async (req: Request, res: Response) => {
  const { school } = req.body;
  //전체 목록 조회
  /**
   * School에 따라 조회되게 할 예정
   * 모든 공지사항은 School에 All?로 넣어야 될지
   * 아니면 req.body값이 없으면 조건으로 걸어야될지 조율필요
   */

  // 특정 학교 게시글 목록만
  // const bulletin = await getManager()
  //   .createQueryBuilder()
  //   .select('bulletin')
  //   .from(BulletIn, 'bulletin')
  //   .where('bulletin.school = :school', { school: school })
  //   .getMany();

  const bulletin = await getManager()
    .createQueryBuilder(BulletIn, 'bulletin')
    .leftJoinAndSelect('bulletin.id', 'Bulletin_Re')
    .leftJoinAndSelect('Bulletin_Re.bulletin_re_id', 'bullet_in_reply')
    .where('bulletin.school = :school', { school: school })
    .orderBy({ 'bulletin.id': 'ASC', 'bullet_in_reply.id': 'ASC' })
    .getMany();

  console.log(bulletin);
  res.status(200).send(bulletin);
};
