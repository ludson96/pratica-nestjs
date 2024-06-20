import { TaskUserRequestDTO, TaskUserResponseDTO } from '../dto/task.dto';

export abstract class ITaskUserRepository {
  // abstract findByTitle(data: Title): Promise<ResponseTaskDto | null>;
  abstract save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO>;
  // abstract findById(id: string): Promise<ResponseTaskDto | null>;
}
