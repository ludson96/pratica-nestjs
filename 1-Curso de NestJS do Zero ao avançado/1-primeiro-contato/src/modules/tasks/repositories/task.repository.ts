import { CreateTaskDto, ResponseTaskDto, Title } from '../dto/task.dto';

export abstract class ITaskRepository {
  abstract findByTitle(data: Title): Promise<ResponseTaskDto | null>;
  abstract save(data: CreateTaskDto): Promise<ResponseTaskDto>;
  abstract findById(id: string): Promise<ResponseTaskDto | null>;
}
