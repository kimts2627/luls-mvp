import {
  Entity,
  BaseEntity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import mem_att from '../relations/mem_att';

@Entity()
export default class Attendance extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  att_date: Date;

  // @Column({
  //   type: 'int',
  //   nullable: true,
  // })
  // status: number;

  @OneToMany(() => mem_att, (mem_att) => mem_att.att)
  Member: mem_att;
}
