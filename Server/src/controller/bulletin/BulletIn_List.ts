import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { BulletIn } from '../../database/entity';

export default async (req: Request, res: Response) => {
  const { school } = req.body;
  //전체 목록 조회
  /**
   * School에 따라 조회되게 할 예정
   * 모든 공지사항은 School에 All?로 넣어야 될지
   * 아니면 req.body값이 없으면 조건으로 걸어야될지 조율필요
   */
  const bulletin = await getManager()
    .createQueryBuilder()
    .select('bulletin')
    .from(BulletIn, 'bulletin')
    .where('bulletin.school = :school', { school: school })
    .getMany();

  console.log(bulletin);
  res.status(200).send(bulletin);
};
