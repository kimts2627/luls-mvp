import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export default class School extends BaseEntity {
  @PrimaryColumn()
  Name: string;

  @Column()
  Degree: string;

  @Column()
  Major: string;

  @Column()
  Entrance_Year: string;

  @Column()
  Graduation_Year: string;
}
