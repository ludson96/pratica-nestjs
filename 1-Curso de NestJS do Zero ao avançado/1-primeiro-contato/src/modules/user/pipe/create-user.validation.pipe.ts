import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreatedUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(value: CreatedUserDto) {
    if (!value.name || !value.username || !value.password || !value.email) {
      throw new HttpException(
        'email é requerido',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return value;
  }
}
