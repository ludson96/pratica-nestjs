import { randomUUID } from 'crypto';
import {
  UsernameAndEmail,
  ResponseUserDto,
  CreateUserDto,
} from '../../dto/user.dto';
import { IUserRepository } from '../user.repository';

export class UserInMemoryRepository extends IUserRepository {
  users: ResponseUserDto[] = [];

  async findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<ResponseUserDto | null> {
    const findUser = this.users.find(
      (user) => user.username === data.username || user.email === data.email,
    );

    return findUser ?? null;
  }

  async save(data: CreateUserDto): Promise<ResponseUserDto> {
    const user: ResponseUserDto = {
      ...data,
      id: '1',
      createdAt: new Date(),
    };

    this.users.push(user);

    return user;
  }

  async findById(id: string): Promise<ResponseUserDto | null> {
    const findUser = this.users.find((user) => user.id === id);

    return findUser ?? null;
  }
  uploadAvatar(id: string, path: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
