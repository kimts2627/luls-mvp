import {
  Entity,
  BaseEntity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Member from './Member';

@Entity()
export default class Attendance extends BaseEntity {
  @PrimaryGeneratedColumn()
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

  @OneToOne(() => Member, {
    nullable: false,
  })
  @JoinColumn({ name: 'member_id' })
  Member: Member;
}
