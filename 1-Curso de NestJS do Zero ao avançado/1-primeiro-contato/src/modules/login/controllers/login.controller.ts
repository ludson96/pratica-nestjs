import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { SignInDto } from '../dto/login.dto';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/signIn')
  async sighIn(@Body() signInDto: SignInDto) {
    return await this.loginService.SignIn(signInDto);
  }
}
