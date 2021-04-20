import { Request, Response } from 'express';
import { Brackets, getManager } from 'typeorm';
// import { BulletIn, Bulletin_Re, BulletIn_Reply } from '../../database/entity';
import { BulletIn } from '../../database/entity/bulletin';

export default async (req: Request, res: Response) => {
  const { school } = req.query;
  console.log(school);
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

  // 특정 학교 게시글 및 댓글 목록
  const bulletin = await getManager()
    .createQueryBuilder(BulletIn, 'bulletin')
    .leftJoinAndSelect('bulletin.bulletin_re', 'Bulletin_Re')
    .leftJoinAndSelect('Bulletin_Re.bulletin_re_id', 'bullet_in_reply')
    .where('bulletin.school = :school', { school: school })
    .orWhere(
      new Brackets((qb) => {
        qb.where("bulletin.school = 'admin'");
      })
    )
    .orderBy({
      'bulletin.school': 'ASC',
      'bulletin.id': 'DESC',
      'bullet_in_reply.id': 'DESC',
    })
    .getMany();

  res.status(200).send({ bulletin: bulletin });
};
