import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'rajesh@gmail.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'rajesh9515',
  })
  @IsNotEmpty()
  password!: string;
}