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

  @Column({
    type: 'varchar',
    nullable: false,
    length: 10,
  })
  Permission: string;

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
  @JoinColumn({ name: 'School_id' })
  School_id: School;

  @OneToOne((type) => Location, {
    nullable: false,
  })
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
