import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import BulletIn from '../bulletin/BulletIn';
import BulletIn_Reply from '../bulletin/Bulletin_Reply';

@Entity()
export default class BulletIn_Re extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // bulletin_id: number;
  @ManyToOne((type) => BulletIn, (bulletin) => bulletin.bulletin_re)
  @JoinColumn({ name: 'bulletin_id' })
  bulletin!: BulletIn;

  @Column()
  status: boolean;

  @OneToOne((type) => BulletIn_Reply)
  @JoinColumn({ name: 'bulletin_re_id' })
  bulletin_re_id: BulletIn_Reply;

  // @OneToOne((type) => Member_BulletIn, {
  //   primary: true,
  // })
  // @JoinColumn({ name: 'id' })
  // id: Member_BulletIn;
}
