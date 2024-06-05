import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { LoginService } from './services/login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'NESTJS_CURSO',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [PrismaService, LoginService],
})
export class LoginModule {}
