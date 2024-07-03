import { FileDto } from 'src/modules/users/dto/user.dto';

export abstract class IStorate {
  abstract upload(file: FileDto, folder: string): Promise<any>;
}
