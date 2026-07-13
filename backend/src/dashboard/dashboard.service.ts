import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Project, ProjectStatus } from '../projects/entities/project.entity';
import { Task, TaskStatus } from '../tasks/entities/task.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async getSummary(userId: number) {
    const [
      totalProjects,
      activeProjects,
      totalTasks,
      completedTasks,
      myTasks,
      recentProjects,
    ] = await Promise.all([
      this.projectRepository.count(),
      this.projectRepository.count({
        where: { status: ProjectStatus.IN_PROGRESS },
      }),
      this.taskRepository.count(),
      this.taskRepository.count({ where: { status: TaskStatus.DONE } }),
      this.taskRepository.find({
        where: { assigneeId: userId },
        relations: ['project'],
        order: { dueDate: 'ASC' },
        take: 5,
      }),
      this.projectRepository.find({
        order: { createdAt: 'DESC' },
        take: 5,
      }),
    ]);

    return {
      totalProjects,
      activeProjects,
      totalTasks,
      completedTasks,
      myTasks,
      recentProjects,
    };
  }
}
