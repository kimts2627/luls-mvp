import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { BulletIn } from '../../database/entity';

export default async (req: Request, res: Response) => {
  //전체 목록 조회
  const bulletin = await getManager()
    .createQueryBuilder()
    .select('bulletin')
    .from(BulletIn, 'bulletin')
    .getMany();

  console.log(bulletin);
  res.status(200).send(bulletin);
};
