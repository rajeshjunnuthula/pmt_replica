import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({ example: 'rajesh9515' })
  @IsNotEmpty()
  currentPassword!: string;

  @ApiProperty({ example: 'newSecurePassword', minLength: 6 })
  @MinLength(6)
  newPassword!: string;
}
