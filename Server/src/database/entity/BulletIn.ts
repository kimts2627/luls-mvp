import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import Member_BulletIn from './Member_BulletIn';

@Entity()
export default class BulletIn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 10,
  })
  category: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  content: string;

  @Column()
  Content_Like: number;

  @Column()
  Submit_Check: boolean;

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
