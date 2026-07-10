import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'Rajesh',
  })
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'rajesh@gmail.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'rajesh9515',
    minLength: 6,
  })
  @MinLength(6)
  password!: string;
}