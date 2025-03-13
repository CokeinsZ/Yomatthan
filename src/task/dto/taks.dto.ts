import { IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class TaskDTO {
  readonly description: string;
  readonly isDone: boolean;
}

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsBoolean()
  readonly isDone: boolean;
}

export class UpdateTaskDTO {
  @IsString()
  @IsOptional()
  readonly description: string;

  @IsBoolean()
  @IsOptional()
  readonly isDone: boolean;
}