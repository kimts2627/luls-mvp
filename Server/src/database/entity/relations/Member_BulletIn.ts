import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import BulletIn from '../bulletin/BulletIn';
import Member from '../users/Member';

@Entity()
export default class Member_BulletIn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => BulletIn, (bulletin) => bulletin.bulletin)
  @JoinColumn({ name: 'Bulletin_id' })
  Bulletin_id: BulletIn;

  @Column()
  Status: boolean;

  @ManyToOne((type) => Member, (member) => member.bulletin)
  @JoinColumn({ name: 'member_id' })
  Members_Id: Member;
}
