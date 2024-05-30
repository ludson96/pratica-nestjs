import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CreatedUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import { CreateUserValidationPipe } from '../pipe/create-user.validation.pipe';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async createUser(@Body() data: CreatedUserDto) {
    return await this.userService.createUser(data);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
