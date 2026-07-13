import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async log(message: string, userId?: number, projectId?: number) {
    const activity = this.activityRepository.create({
      message,
      userId,
      projectId,
    });
    return await this.activityRepository.save(activity);
  }

  async findAll(projectId?: number) {
    return await this.activityRepository.find({
      where: projectId ? { projectId } : {},
      relations: ['user'],
      order: { createdAt: 'DESC' },
      take: 50,
    });
  }
}
