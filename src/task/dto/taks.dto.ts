import { IsString, IsBoolean } from 'class-validator';

export class TaskDTO {
  readonly description: string;
  readonly isDone: boolean;
}

export class CreateTaskDTO {
  