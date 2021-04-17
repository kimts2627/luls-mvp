import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { BulletIn } from '../bulletin';
import { Member } from '../users';

@Entity()
export default class Member_BulletIn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => BulletIn)
  @JoinColumn({ name: 'Bulletin_id' })
  Bulletin_id: BulletIn;

  @Column()
  Status: boolean;

  @ManyToOne((type) => Member, member => member.bulletin)
  @JoinColumn({ name: 'Members_Id' })
  Members_Id: Member;
}
