import { CreateTaskDto, ResponseTaskDto } from '../dto/task.dto';

export abstract class ITaskRepository {
  abstract save(data: CreateTaskDto): Promise<ResponseTaskDto>;
}
