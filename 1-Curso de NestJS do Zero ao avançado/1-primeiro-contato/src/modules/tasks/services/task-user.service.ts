import { Injectable } from '@nestjs/common';
import { TaskUserRequestDTO } from '../dto/task.dto';
import { ITaskUserRepository } from '../repositories/task-user.repository';

@Injectable()
export class TaskUserService {
  constructor(private taskRepository: ITaskUserRepository) {}

  async createTask(data: TaskUserRequestDTO) {
    return await this.taskRepository.save(data);
  }
}
