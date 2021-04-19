import { Request, Response } from 'express';
import { getManager, getConnection } from 'typeorm';
// import { Member, Location, School, Attendance } from '../../database/entity';
import Member from '../../database/entity/users/Member';
import Location from '../../database/entity/users/Location';
import School from '../../database/entity/users/School';
import Attendance from '../../database/entity/users/Attendance';

export default async (req: Request, res: Response) => {
  const {
    School_Name,
    Degree,
    Major,
    Entrance_Year,
    Graduation_Year,
    City,
    Country,
    State,
    Birthday,
  } = req.body;
  const { email, F_Name, L_Name, permission } = res.locals;
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    // Insert Location Table
    const location = await queryRunner.manager
      .save(Location, {
        City: City,
        Country: Country,
        State: State,
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    // Insert School Table
    const school = await queryRunner.manager
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
    // Insert Member Table
    const member = await queryRunner.manager
      .save(Member, {
        Name: School_Name,
        permission: permission,
        Email: email,
        F_Name: F_Name,
        L_Name: L_Name,
        city: location.id,
        Birthday: Birthday,
        school: school.id,
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    // Insert Attendance Table
    await queryRunner.manager
      .save(Attendance, {
        Member: member.id,
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    res.status(400).send('땡');
  } finally {
    await queryRunner.release();
    res.status(201).send('Signup Success');
  }

  // await getManager()
  //   .transaction('SERIALIZABLE', async (transactionalEntityManager) => {
  //     const location = await transactionalEntityManager
  //       .save(Location, {
  //         City: City,
  //         Country: Country,
  //         State: State,
  //       })
  //       .catch((err) => {
  //         return err;
  //       });

  //     const school = await transactionalEntityManager
  //       .save(School, {
  //         Name: School_Name,
  //         Degree: Degree,
  //         Major: Major,
  //         Entrance_Year: Entrance_Year,
  //         Graduation_Year: Graduation_Year,
  //       })
  //       .catch((err) => {
  //         return err;
  //       });

  //     await transactionalEntityManager
  //       .save(Member, {
  //         Name: School_Name,
  //         Email: Email,
  //         F_Name: F_Name,
  //         L_Name: L_Name,
  //         City: location.id,
  //         Birthday: Birthday,
  //         School: school.id,
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //     res.status(201).send('성공');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
