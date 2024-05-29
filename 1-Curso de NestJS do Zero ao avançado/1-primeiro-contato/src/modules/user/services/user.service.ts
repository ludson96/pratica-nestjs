import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreatedUserDto } from '../dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreatedUserDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            username: data.username,
          },
          {
            email: data.email,
          },
        ],
      },
    });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const passwordHashed = await hash(data.password, 10);

    return await this.prisma.users.create({
      data: {
        ...data,
        password: passwordHashed,
      },
    });
  }

  async getAllUsers() {
    return this.prisma.users.findMany();
  }
}
