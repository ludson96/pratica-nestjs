import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { hash } from 'bcrypt';
import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(data: CreateUserDto) {
    const user = await this.userRepository.findByUsernameOrEmail({
      username: data.username,
      email: data.email,
    });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const password = await hash(data.password, 10);

    return await this.userRepository.save({
      ...data,
      password,
    });
  }
}
