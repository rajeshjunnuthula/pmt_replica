import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { MilestonesService } from './milestones.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Milestones')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('milestones')
export class MilestonesController {
  constructor(private readonly milestonesService: MilestonesService) {}

  @Post()
  create(@Body() createMilestoneDto: CreateMilestoneDto) {
    return this.milestonesService.create(createMilestoneDto);
  }

  @Get()
  findAll(@Query('projectId') projectId?: string) {
    return this.milestonesService.findAll(projectId ? +projectId : undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestonesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMilestoneDto: UpdateMilestoneDto,
  ) {
    return this.milestonesService.update(+id, updateMilestoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milestonesService.remove(+id);
  }
}
