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
}
