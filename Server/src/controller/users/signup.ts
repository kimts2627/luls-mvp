import { Request, Response } from 'express';
import { getManager, getConnection, getMongoManager } from 'typeorm';
import { Member, Location } from '../../database/entity';

export default async (req: Request, res: Response) => {
  const {
    School_Name,
    Degree,
    Major,
    Entrance_Year,
    Graduation_Year,
    F_Name,
    L_Name,
    City,
    Country,
    State,
    Birthday,
  } = req.body;
  //   await getManager().transaction(
  //     'SERIALIZABLE',
  //     async (transactionalEntityManager) => {
  //       await transactionalEntityManager.save(Member);
  //       await transactionalEntityManager.save(Location);
  //     }
  //   );
};
