import { CreateTaskDTO, UpdateTaskDTO } from "../dto/taks.dto";

export interface Task {
    id: string;
    description: string;
    isDone: boolean;
    createdAt: Date;
}

export interface TaskServiceInterface {
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    create(createTaskDTO: CreateTaskDTO): Promise<Task>;
    update(id: string, updateTaskDTO: UpdateTaskDTO): Promise<Task>;
    delete(id: string): Promise<void>;
}