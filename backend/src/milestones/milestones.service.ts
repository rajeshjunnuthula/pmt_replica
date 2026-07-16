import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Milestone } from './entities/milestone.entity';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';

@Injectable()
export class MilestonesService {
  constructor(
    @InjectRepository(Milestone)
    private readonly milestoneRepository: Repository<Milestone>,
  ) {}

  async create(createMilestoneDto: CreateMilestoneDto) {
    const milestone = this.milestoneRepository.create(createMilestoneDto);
    return await this.milestoneRepository.save(milestone);
  }

  async findAll(projectId?: number) {
    return await this.milestoneRepository.find({
      where: projectId ? { projectId } : {},
      relations: ['project'],
      order: { dueDate: 'ASC' },
    });
  }

  async findOne(id: number) {
    const milestone = await this.milestoneRepository.findOne({
      where: { id },
    });

    if (!milestone) {
      throw new NotFoundException('Milestone not found');
    }

    return milestone;
  }

  async update(id: number, updateMilestoneDto: UpdateMilestoneDto) {
    await this.findOne(id);
    await this.milestoneRepository.update(id, updateMilestoneDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.milestoneRepository.delete(id);

    return { message: 'Milestone deleted successfully' };
  }
}
