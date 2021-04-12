import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  NoVersionOrUpdateDateColumnError,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Member from '../../database/entity/Member';

@Entity()
export default class School extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // id: number;
  @OneToOne((type) => Member, {
    primary: true,
  })
  @JoinColumn({ name: 'id' })
  id: Member;

  @Column()
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
