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
  @PrimaryGeneratedColumn()
  id: number;
  // @OneToOne((type) => Member, {
  //   primary: true,
  // })
  // @JoinColumn({ name: 'id' })
  // id: Member;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Degree: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Major: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Entrance_Year: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Graduation_Year: string;
}
