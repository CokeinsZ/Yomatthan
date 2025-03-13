import { Controller, Post, Req } from '@nestjs/common';

@Controller('api/v1/task')
export class TaskController {
    @Post()
    createTask(@Req() req: Request) {
        return 'method ${req.method} called';
    }
}
