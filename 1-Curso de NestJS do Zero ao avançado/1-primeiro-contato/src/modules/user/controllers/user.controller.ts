import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatedUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: CreatedUserDto) {
    return await this.userService.createUser(data);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
