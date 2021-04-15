import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BulletIn_Reply, BulletIn } from '../bulletin';

@Entity()
export default class BulletIn_Re extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => BulletIn)
  @JoinColumn({ name: 'bulletin_id' })
  bulletin_id: BulletIn;

  @Column()
  status: boolean;

  @ManyToOne((type) => BulletIn_Reply)
  @JoinColumn({ name: 'bulletin_re_id' })
  bulletin_re_id: BulletIn_Reply;

  // @OneToOne((type) => Member_BulletIn, {
  //   primary: true,
  // })
  // @JoinColumn({ name: 'id' })
  // id: Member_BulletIn;
}
