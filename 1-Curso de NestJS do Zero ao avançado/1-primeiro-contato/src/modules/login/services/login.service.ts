import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/infra/database/prisma.service';
import { compare } from 'bcrypt';

@Injectable()
export class Login {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async SignIn(data: SignInDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        username: data.username,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    // Validar a senha
    const isEqualPassword = await compare(data.password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
