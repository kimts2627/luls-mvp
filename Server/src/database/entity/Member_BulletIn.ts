import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import BulletIn from './BulletIn';
import Member from './Member';

@Entity()
export default class Member_BulletIn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 10,
  })
  category: string;

  @OneToOne((type) => BulletIn)
  @JoinColumn({ name: 'Bulletin_id' })
  Bulletin_id: BulletIn;

  @Column()
  Status: boolean;

  @ManyToOne((type) => Member)
  @JoinColumn({ name: 'Members_Id' })
  Members_Id: Member;
}
