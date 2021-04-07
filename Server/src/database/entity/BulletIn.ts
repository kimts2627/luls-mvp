import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Member_BulletIn from './Member_BulletIn';

@Entity()
export default class BulletIn extends BaseEntity {
  @Column()
  Title: string;

  @Column()
  Content: string;

  @Column()
  Username: string;

  @Column()
  Content_Like: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne((type) => Member_BulletIn, {
    primary: true,
  })
  @JoinColumn({ name: 'id' })
  id: Member_BulletIn;
}