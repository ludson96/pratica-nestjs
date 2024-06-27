import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { TaskUserService } from '../services/task-user.service';
import { AuthGuard } from 'src/infra/providers/auth-guard.providers';
import { CreateTaskUserSchemaDto } from '../schemas/task-user.schema';

@Controller('/tasks')
export class TaskUserController {
  constructor(private readonly taskService: TaskUserService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createTask(@Body() data: CreateTaskUserSchemaDto, @Request() req) {
    return await this.taskService.createTask({
      ...data,
      userId: req.user.sub,
    });
  }
}
