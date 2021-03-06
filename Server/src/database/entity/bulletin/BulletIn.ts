import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BulletIn_Reply } from '..';
import BulletIn_Re from '../relations/Bulletin_Re';
import Member_BulletIn from '../relations/Member_BulletIn';

@Entity()
export default class BulletIn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => BulletIn_Reply, (bulletin_re) => bulletin_re.bulletin)
  bulletin_re: BulletIn_Reply[];

  @Column({
    type: 'varchar',
    nullable: false,
    length: '30',
  })
  title: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  content: string;

  @Column({
    type: 'boolean',
    default: true,
    nullable: false,
  })
  visible: boolean;

  // @Column()
  // Content_Like: number;

  // @Column({
  //   type: 'varchar',
  //   length: 10,
  //   default: 'not submit',
  // })
  // Submit_Check: string;

  @Index()
  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  school: string;

  @OneToOne(
    (type) => Member_BulletIn,
    (member_bulletin) => member_bulletin.Bulletin_id
  )
  bulletin: Member_BulletIn;

  // @OneToMany((type) => Bulletin_Re, (Bulletin_Re) => Bulletin_Re.bulletin)
  // bulletin_re!: BulletIn[];

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
