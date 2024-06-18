import { PrismaService } from 'src/infra/database/prisma.service';
import {
  UsernameAndEmail,
  ResponseUserDto,
  CreateUserDto,
} from '../../dto/user.dto';
import { IUserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<ResponseUserDto | null> {
    return await this.prisma.users.findFirst({
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
  }

  async save(data: CreateUserDto): Promise<ResponseUserDto> {
    return await this.prisma.users.create({ data });
  }

  async findById(id: string): Promise<ResponseUserDto | null> {
    return await this.prisma.users.findUnique({
      where: { id },
    });
  }
}
