import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { MilestoneStatus } from '../entities/milestone.entity';

export class CreateMilestoneDto {
  @ApiProperty({ example: 'Backend API' })
  @IsNotEmpty()
  @IsString()
  title!: string;

  @ApiProperty({ example: '2026-07-20' })
  @IsDateString()
  dueDate!: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  projectId!: number;

  @ApiPropertyOptional({
    enum: MilestoneStatus,
    default: MilestoneStatus.UPCOMING,
  })
  @IsOptional()
  @IsEnum(MilestoneStatus)
  status?: MilestoneStatus;
}
