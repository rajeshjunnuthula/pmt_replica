import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketRepository.create(createTicketDto);
    return await this.ticketRepository.save(ticket);
  }

  async findAll(projectId?: number) {
    return await this.ticketRepository.find({
      where: projectId ? { projectId } : {},
      relations: ['project'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const ticket = await this.ticketRepository.findOne({
      where: { id },
      relations: ['project'],
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    return ticket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    await this.findOne(id);
    await this.ticketRepository.update(id, updateTicketDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.ticketRepository.delete(id);

    return { message: 'Ticket deleted successfully' };
  }
}
