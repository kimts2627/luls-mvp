import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Location extends BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({
    nullable: false,
  })
  City: string;

  @Column({
    nullable: false,
  })
  Country: string;

  @Column({
    nullable: false,
  })
  State: string;
}
