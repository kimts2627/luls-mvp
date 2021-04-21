import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BulletIn } from '..';
import Member from '../users/Member';

@Entity()
export default class BulletIn_Reply extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: boolean;

  @ManyToOne((type) => BulletIn, (bulletin) => bulletin.bulletin_re)
  @JoinColumn({ name: 'bulletin_id' })
  bulletin!: BulletIn;

  @ManyToOne((type) => Member, (member) => member.id)
  member: Member;

  @Column()
  content: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
