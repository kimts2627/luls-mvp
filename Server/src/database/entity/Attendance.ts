import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Member from './Member';

@Entity()
export default class Attendance extends BaseEntity {
  @PrimaryColumn()
  id: number;

  //   @Column()
  //   Member_Id: number;

  @Column()
  att_date: Date;

  @Column()
  status: number;

  @OneToOne(() => Member)
  @JoinColumn({ name: 'Member_Id' })
  Member: Member;
}
