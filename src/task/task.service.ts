import { Injectable } from '@nestjs/common';
import { Task, TaskServiceInterface } from './interface/task.interface';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/taks.dto';

@Injectable()
export class TaskService implements TaskServiceInterface {
    findAll(): Promise<Task[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<Task> {
        throw new Error('Method not implemented.');
    }
    create(createTaskDTO: CreateTaskDTO): Promise<Task> {
        throw new Error('Method not implemented.');
    }
    update(id: string, updateTaskDTO: UpdateTaskDTO): Promise<Task> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
