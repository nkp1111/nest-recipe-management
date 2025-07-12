import { IsEmail, IsOptional, MinLength, Matches } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  email: string;

  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
  })
  @MinLength(8)
  password: string;

  @IsOptional()
  username?: string;
}
