import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import Member from './Member';

@Entity()
export default class Member_BulletIn extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  BulletIn_Id: number;

  @ManyToOne((type) => Member)
  @JoinColumn({ name: 'Members_Id' })
  Member: Member;

  @Column()
  Status: boolean;
}
