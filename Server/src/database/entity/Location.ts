import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class Location extends BaseEntity {
  @PrimaryColumn()
  City: string;

  @Column()
  Country: string;

  @Column()
  State: string;
}
