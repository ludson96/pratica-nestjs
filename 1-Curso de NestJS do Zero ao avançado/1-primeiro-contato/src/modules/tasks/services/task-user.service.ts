import { Injectable } from '@nestjs/common';
import { TaskUserRequestDTO } from '../dto/task.dto';
import { ITaskUserRepository } from '../repositories/task-user.repository';

@Injectable()
export class TaskUserService {
  constructor(private taskRepository: ITaskUserRepository) {}

  async createTask(data: TaskUserRequestDTO) {
    // const task = await this.taskRepository.findByTitle({
    //   title: data.title,
    // });

    // if (!task) {
    //   throw new HttpException('Task already exists', HttpStatus.BAD_REQUEST);
    // }

    return await this.taskRepository.save(data);
  }

  //   async getTaskById(id: string) {
  //     return await this.taskRepository.findById(id);
  //   }
}
