import { Request, Response } from 'express';
import { getManager, getConnection } from 'typeorm';
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
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  // establish real database connection using our new query runner
  await queryRunner.connect();

  // now we can execute any queries on a query runner, for example:

  // lets now open a new transaction:
  await queryRunner.startTransaction();
  try {
    const location = await queryRunner.manager
      .save(Location, {
        City: City,
        Country: Country,
        State: State,
      })
      .catch((err) => {
        return err;
      });
    console.log(location);
    const result = await queryRunner.manager
      .save(School, {
        Name: School_Name,
        Degree: Degree,
        Major: Major,
        Entrance_Year: Entrance_Year,
        Graduation_Year: Graduation_Year,
      })
      .catch((err) => {
        return err;
      });
    console.log(result);
    await queryRunner.manager
      .save(Member, {
        Name: School_Name,
        Email: Email,
        F_Name: F_Name,
        L_Name: L_Name,
        City: location.id,
        Birthday: Birthday,
        School_id: result.id,
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    await queryRunner.commitTransaction();
  } catch {
    await queryRunner.rollbackTransaction();
    res.status(400).send('땡');
  } finally {
    await queryRunner.release();
    res.send('Clear');
  }
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

  //     await transactionalEntityManager
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
  //       .then(async (result) => {
  //         console.log(result);
  //         await transactionalEntityManager
  //           .save(Member, {
  //             Name: School_Name,
  //             Email: Email,
  //             F_Name: F_Name,
  //             L_Name: L_Name,
  //             City: City,
  //             Birthday: Birthday,
  //             School_id: result[0].id,
  //           })
  //           .then((result) => {
  //             console.log(result);
  //           });
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
