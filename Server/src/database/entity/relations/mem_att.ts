import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import BulletIn from '../bulletin/BulletIn';
import BulletIn_Reply from '../bulletin/Bulletin_Reply';
import Attendance from '../users/Attendance';
import Member from '../users/Member';

@Entity()
export default class mem_att extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Attendance, (att) => att.Member)
  att!: Attendance;

  @ManyToOne((type) => Member, (mem) => mem.mem_att)
  @JoinColumn({ name: 'member_id' })
  Member: Member;
}
