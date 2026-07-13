import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  taskId!: number;

  @ApiProperty({ example: 'Looks good, ready for review.' })
  @IsNotEmpty()
  @IsString()
  content!: string;
}
