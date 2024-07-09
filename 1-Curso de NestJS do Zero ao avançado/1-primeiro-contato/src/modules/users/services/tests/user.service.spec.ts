import { Test } from '@nestjs/testing';
import { IStorate } from 'src/infra/providers/storage/storage';
import { CreateUserDto } from 'src/modules/users/dto/user.dto';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { UserService } from 'src/modules/users/services/user.service';
import { UserInMemoryRepository } from '../../repositories/in-memory/user-in-memory.repository';

describe('Testando camada de serviço', () => {
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: IUserRepository,
          useClass: UserInMemoryRepository,
        },
        {
          provide: IStorate,
          useValue: {
            upload: jest.fn(),
          },
        },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
  });

  it('Verificar se é criado um usuário com sucesso', async () => {
    const data: CreateUserDto = {
      email: 'Ludson01@hotmail.com',
      name: 'ludson01',
      password: '12346',
      username: 'ludson01',
    };

    const result = await userService.createUser(data);

    expect(result).toHaveProperty('id');
  });
});
