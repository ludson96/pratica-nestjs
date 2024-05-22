import { Controller, Get, Param, Query } from '@nestjs/common';

interface ParamsUser {
  id: string;
}

@Controller('/users')
export class UserController {
  @Get()
  helloMommy() {
    return 'Retornando todos os usuários.';
  }

  @Get('/findByName')
  findByName(@Query('name') name: string) {
    // Adiciona o nome da query
    return `Seu nome é: ${JSON.stringify(name)}`;
  }

  @Get('/:id')
  findById(@Param() params: ParamsUser) {
    return `O seu ID é: ${params.id}`;
  }
}
