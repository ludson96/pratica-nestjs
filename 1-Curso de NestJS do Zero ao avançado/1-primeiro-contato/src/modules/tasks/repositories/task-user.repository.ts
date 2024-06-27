import { TaskUserRequestDTO, TaskUserResponseDTO } from '../dto/task.dto';

export abstract class ITaskUserRepository {
  abstract save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO>;
}
