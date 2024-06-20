import { Module } from '@nestjs/common';
import { TaskUserController } from './controllers/task-user.controller';
import { TaskUserService } from './services/task-user.service';
import { PrismaService } from 'src/infra/database/prisma.service';
import { ITaskUserRepository } from './repositories/task-user.repository';
import { TaskUserPrismaRepository } from './repositories/prisma/task-user.prisma.repository';

@Module({
  imports: [],
  controllers: [TaskUserController],
  providers: [
    TaskUserService,
    PrismaService,
    {
      provide: ITaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
})
export class TaskUserModule {}
