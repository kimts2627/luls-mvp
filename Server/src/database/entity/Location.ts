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

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  City: string;

  @Column({
    nullable: false,
    length: 20,
  })
  Country: string;

  @Column({
    nullable: false,
    length: 20,
  })
  State: string;
}
