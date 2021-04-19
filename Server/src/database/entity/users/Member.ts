import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  Unique,
  Generated,
} from 'typeorm';
import { School, Location } from './';
import Member_BulletIn from '../relations/Member_BulletIn';

@Entity()
export default class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => Member_BulletIn,
    (member_bulletin) => member_bulletin.Members_Id
  )
  bulletin: Member_BulletIn;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 10,
  })
  permission: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 30,
  })
  Email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 10,
  })
  F_Name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  L_Name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 10,
  })
  Birthday: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToOne((type) => School, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'school' })
  school: School;

  @OneToOne((type) => Location, {
    nullable: false,
  })
  @JoinColumn({ name: 'city' })
  city: Location;

  @OneToMany(
    (type) => Member_BulletIn,
    (member_bulletin) => member_bulletin.Member
  )
  bulletin!: Member[];

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
