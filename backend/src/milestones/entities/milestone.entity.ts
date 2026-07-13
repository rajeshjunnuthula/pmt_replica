import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Project } from '../../projects/entities/project.entity';

export enum MilestoneStatus {
  UPCOMING = 'Upcoming',
  COMPLETED = 'Completed',
}

@Entity('milestones')
export class Milestone {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  title!: string;

  @Column({ type: 'date' })
  dueDate!: Date;

  @Column({
    type: 'enum',
    enum: MilestoneStatus,
    default: MilestoneStatus.UPCOMING,
  })
  status!: MilestoneStatus;

  @ManyToOne(() => Project, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'projectId' })
  project!: Project;

  @Column()
  projectId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
