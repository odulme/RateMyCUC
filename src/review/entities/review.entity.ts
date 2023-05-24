import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Course } from '../../course/entities/course.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  difficulty: number;

  @Column({ type: 'int' })
  gain: number;

  @Column({ type: 'int' })
  rate: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  publishTime: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @Column({ type: 'text' })
  content: string;

  @ManyToMany(() => User)
  @JoinTable()
  upvoteUser: User[];

  @Column({ type: 'int', default: 0 })
  upvoteCount: number;

  @ManyToMany(() => User)
  @JoinTable()
  downvoteUser: User[];

  @Column({ type: 'int', default: 0 })
  downvoteCount: number;

  @ManyToOne(() => User, (user) => user.authoredReviews)
  author: User;

  @ManyToOne(() => Course, (course) => course.reviews)
  course: Course;
}
