import { IsString, IsOptional, Length, IsMobilePhone } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(2, 100)
  firstName: string;

  @IsString()
  @Length(2, 100)
  lastName: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsString()
  @IsMobilePhone()
  mobileNumber: string;
}
