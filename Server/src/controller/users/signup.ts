import { Request, Response } from 'express';
import { getManager } from 'typeorm';
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
  // const entityManager = getManager();
  // const someQuery = entityManager.query(`
  // INSERT INTO  `)
  // await getManager()
  //   .transaction('SERIALIZABLE', async (transactionalEntityManager) => {
  //     await transactionalEntityManager
  //       .save(Location, {
  //         City: City,
  //         Country: Country,
  //         State: State,
  //       })
  //       .then((result) => {
  //         console.log(result);
  //       });

  //     const result = await transactionalEntityManager
  //       .save(School, {
  //         Name: School_Name,
  //         Degree: Degree,
  //         Major: Major,
  //         Entrance_Year: Entrance_Year,
  //         Graduation_Year: Graduation_Year,
  //       })
  //       .then(async (result) => {
  //         return await transactionalEntityManager.find(School, {
  //           id: result.id,
  //         });
  //       })
  //       .then();

  //     console.log(result[0].id);

  //     await transactionalEntityManager
  //       .save(Member, {
  //         Name: School_Name,
  //         Email: Email,
  //         F_Name: F_Name,
  //         L_Name: L_Name,
  //         City: City,
  //         Birthday: Birthday,
  //         School_id: result[0].id
  //       })
  //       .then((result) => {
  //         console.log(result);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  // });
  res.send('Clear');
};
