import { Injectable } from '@nestjs/common';
import { ITaskUserRepository } from '../task-user.repository';
import { PrismaService } from 'src/infra/database/prisma.service';
import { TaskUserResponseDTO, TaskUserRequestDTO } from '../../dto/task.dto';

@Injectable()
export class TaskUserPrismaRepository implements ITaskUserRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    return this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            description: data.description,
            endAt: data.endAt,
            startAt: data.startAt,
            title: data.title,
            priority: data.priority,
            status: data.status,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }
}
