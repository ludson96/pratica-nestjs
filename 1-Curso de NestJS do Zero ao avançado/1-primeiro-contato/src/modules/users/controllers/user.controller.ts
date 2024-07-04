import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthGuard } from 'src/infra/providers/auth-guard.providers';
import {
  CreateUserSchemaDto,
  CreatedUserResponseSchemaDto,
} from '../schemas/create-user.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDto } from '../dto/user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: CreateUserSchemaDto) {
    const user = await this.userService.createUser(data);
    return CreatedUserResponseSchemaDto.parse(user);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return await this.userService.getUserById(req.user.sub);
  }

  @Put('/avatar')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(@Request() req, @UploadedFile() file: FileDto) {
    const avatar = this.userService.uploadAvatar({
      file,
      idUser: req.user.sub,
    });

    return avatar;
  }
}
