import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task.dto';
import { ITaskRepository } from '../repositories/task.repository';

export class TaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async createTask(data: CreateTaskDto) {
    const task = await this.taskRepository.findByTitle({
      title: data.title,
    });

    if (!task) {
      throw new HttpException('Task already exists', HttpStatus.BAD_REQUEST);
    }

    return await this.taskRepository.save(data);
  }

  async getTaskById(id: string) {
    return await this.taskRepository.findById(id);
  }
}

