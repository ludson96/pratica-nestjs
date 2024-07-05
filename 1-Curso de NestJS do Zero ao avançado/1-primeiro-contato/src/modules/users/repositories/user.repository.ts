import {
  CreateUserDto,
  ResponseUserDto,
  UsernameAndEmail,
} from '../dto/user.dto';

export abstract class IUserRepository {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<ResponseUserDto | null>;

  abstract save(data: CreateUserDto): Promise<ResponseUserDto>;

  abstract findById(id: string): Promise<ResponseUserDto | null>;

  abstract uploadAvatar(id: string, path: string): Promise<void>;
}
