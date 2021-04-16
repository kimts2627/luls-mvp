import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class School extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  Name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  Degree: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  Major: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  Entrance_Year: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  Graduation_Year: string;
}
