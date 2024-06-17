import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';
import { CreateUserValidationPipe } from '../pipe/create-user.validation.pipe';
import { AuthGuard } from 'src/infra/providers/auth-guard.providers';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return this.userService.getUser(req.user.sub);
  }
}
