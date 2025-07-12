import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsOptional, Matches, MinLength } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
  })
  @MinLength(8)
  @IsOptional()
  password?: string;

  @IsOptional()
  username?: string;
}
