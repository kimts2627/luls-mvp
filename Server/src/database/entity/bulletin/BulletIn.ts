import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Bulletin_Re, Member_BulletIn } from '../relations';

@Entity()
export default class BulletIn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  // @OneToMany(() => Bulletin_Re, (bulletin_re) => bulletin_re.bulletin_id)
  // @JoinColumn({ name: 'id' })
  // @PrimaryGeneratedColumn()
  // id: BulletIn;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  title: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  content: string;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  visible: boolean;

  @Column()
  Content_Like: number;

  @Column()
  Submit_Check: boolean;

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
  @OneToMany((type) => Bulletin_Re, (Bulletin_Re) => Bulletin_Re.bulletin)
  bulletin_re!: BulletIn[];

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  // @OneToOne((type) => Member_BulletIn, {
  //   primary: true,
  // })
  // @JoinColumn({ name: 'id' })
  // id: Member_BulletIn;
}
