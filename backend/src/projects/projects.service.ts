import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  async findAll(search?: string) {
    return await this.projectRepository.find({
      where: search ? { name: Like(`%${search}%`) } : {},
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return await this.projectRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    await this.projectRepository.update(id, updateProjectDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.projectRepository.delete(id);

    return {
      message: 'Project deleted successfully',
    };
  }
}