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

  @Column({
    type: 'datetime',
    nullable: true,
  })
  att_date: Date;

  @Column({
    type: 'int',
    nullable: true,
  })
  status: number;

  @OneToOne(() => Member)
  @JoinColumn({ name: 'Member_Id' })
  Member: Member;
}
