import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/teste')
  helloMommy() {
    return 'Testando novamente';
  }
}
