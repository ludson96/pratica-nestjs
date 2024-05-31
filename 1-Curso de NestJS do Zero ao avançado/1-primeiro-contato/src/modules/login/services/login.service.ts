import { Injectable } from '@nestjs/common';
import { SignInDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class Login {
  constructor(
    private jwtService: JwtService,
    private userService: IUserRepository,
  ) {}

  async SignIn(data: SignInDto) {}
}
