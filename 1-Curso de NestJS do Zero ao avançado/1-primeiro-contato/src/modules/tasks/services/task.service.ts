import { CreateTaskDto } from '../dto/task.dto';
import { ITaskRepository } from '../repositories/task.repository';

export class TaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async createTask(data: CreateTaskDto) {
    return await this.taskRepository.save(data);
  }
}
