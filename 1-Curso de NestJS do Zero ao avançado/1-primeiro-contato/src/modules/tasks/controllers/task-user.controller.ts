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
    console.log('Eu sou o userid: ', req.user.sub);

    return await this.taskService.createTask({
      ...data,
      userId: req.user.sub,
    });
  }

  // @Get()
  // async profile(@Request() req) {
  //   return this.taskService.getTaskById(req.task.sub);
  // }
}
