import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(value: CreateUserDto) {
    if (!value.name || !value.username || !value.password || !value.email) {
      throw new HttpException(
        'email é requerido',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return value;
  }
}
