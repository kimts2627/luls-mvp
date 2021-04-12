import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import School from './School';
import Location from './Location';

@Entity()
export default class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Permission: number;

  @Column()
  Email: string;

  // @Column()
  // Password: string;

  @Column()
  F_Name: string;

  @Column()
  L_Name: string;

  // @Column()
  // Attendance: string;

  @OneToOne(() => School)
  @JoinColumn({ name: 'School_Id' })
  School_Id: School;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  // @ManyToOne((type) => School)
  // @JoinColumn({ name: 'School_Name' })
  // School_Name: School;

  @ManyToOne((type) => Location)
  @JoinColumn({ name: 'City' })
  City: Location;

  static async insertInfo(data: object): Promise<Member | undefined> {
    await this.createQueryBuilder()
      .insert()
      .into(Member)
      .values(data)
      .execute();

    return;
  }

  static async changeInfo(
    id: number,
    data: object
  ): Promise<Member | undefined> {
    await this.createQueryBuilder()
      .update(Member)
      .set(data)
      .where('id = :id', { id })
      .execute();

    return this.findOne({ id });
  }
}
