import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { TicketPriority, TicketStatus } from '../entities/ticket.entity';

export class CreateTicketDto {
  @ApiProperty({ example: 'Login page bug' })
  @IsNotEmpty()
  @IsString()
  title!: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  projectId!: number;

  @ApiPropertyOptional({ enum: TicketPriority, default: TicketPriority.MEDIUM })
  @IsOptional()
  @IsEnum(TicketPriority)
  priority?: TicketPriority;

  @ApiPropertyOptional({ enum: TicketStatus, default: TicketStatus.OPEN })
  @IsOptional()
  @IsEnum(TicketStatus)
  status?: TicketStatus;
}
