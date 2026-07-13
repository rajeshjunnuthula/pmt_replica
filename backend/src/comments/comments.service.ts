import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto, authorId: number) {
    const comment = this.commentRepository.create({
      ...createCommentDto,
      authorId,
    });
    return await this.commentRepository.save(comment);
  }

  async findAllByTask(taskId: number) {
    return await this.commentRepository.find({
      where: { taskId },
      relations: ['author'],
      order: { createdAt: 'ASC' },
    });
  }

  async remove(id: number) {
    const comment = await this.commentRepository.findOne({ where: { id } });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    await this.commentRepository.delete(id);

    return { message: 'Comment deleted successfully' };
  }
}
