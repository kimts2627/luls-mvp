import { Request, Response } from 'express';
import { identitytoolkit } from 'googleapis/build/src/apis/identitytoolkit';
import { getManager, getConnection, getMongoManager } from 'typeorm';
import { Member, Location, School } from '../../database/entity';

export default async (req: Request, res: Response) => {
  const {
    School_Name,
    Email,
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
  await getManager()
    .transaction('SERIALIZABLE', async (transactionalEntityManager) => {
      await transactionalEntityManager
        .save(Location, {
          City: City,
          Country: Country,
          State: State,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
      await transactionalEntityManager
        .save(School, {
          Name: School_Name,
          Degree: Degree,
          Major: Major,
          Entrance_Year: Entrance_Year,
          Graduation_Year: Graduation_Year,
        })
        .then((result) => {
          console.log(result.id);
        })
        .catch((err) => {
          console.log(err);
        });
      await transactionalEntityManager
        .save(Member, {
          School_Name: School_Name,
          Email: Email,
          F_Name: F_Name,
          L_Name: L_Name,
          City: City,
          Birthday: Birthday,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  res.send('Clear');
};
