import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AvatarDto, CreateUserDto } from '../dto/user.dto';
import { hash } from 'bcrypt';
import { IUserRepository } from '../repositories/user.repository';
import { IStorate } from 'src/infra/providers/storage/storage';
import { extname } from 'path';

@Injectable()
export class UserService {
  constructor(
    private userRepository: IUserRepository,
    private storage: IStorate,
  ) {}

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

  async getUserById(id: string) {
    return await this.userRepository.findById(id);
  }

  async uploadAvatar(data: AvatarDto) {
    const extFile = extname(data.file.originalname);
    const tranformName = `${data.idUser}${extFile}`;
    data.file.originalname = tranformName;
    const file = await this.storage.upload(data.file, 'avatar');
    return file;
  }
}
