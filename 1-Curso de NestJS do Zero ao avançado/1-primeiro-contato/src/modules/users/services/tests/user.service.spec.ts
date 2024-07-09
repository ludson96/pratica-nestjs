import { Test } from '@nestjs/testing';
import { IStorate } from 'src/infra/providers/storage/storage';
import { CreateUserDto } from 'src/modules/users/dto/user.dto';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { UserService } from 'src/modules/users/services/user.service';
import { UserInMemoryRepository } from '../../repositories/in-memory/user-in-memory.repository';

describe('UserService', () => {
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

  describe('createUser', () => {
    it('deve criar um usuário com sucesso', async () => {
      const data: CreateUserDto = {
        email: 'Ludson01@hotmail.com',
        name: 'ludson01',
        password: '12346',
        username: 'ludson01',
      };

      const result = await userService.createUser(data);

      expect(result).toHaveProperty('id');
    });

    it('deve falhar ao criar um usuário se o email ou username estiver em uso', async () => {
      const data: CreateUserDto = {
        email: 'Ludson01@hotmail.com',
        name: 'ludson01',
        password: '12346',
        username: 'ludson01',
      };

      await userService.createUser(data);

      expect(userService.createUser(data)).rejects.toThrow();
    });
  });

  describe('getUserById', () => {
    it('deve retornar um usuário pelo id com sucesso', async () => {
      const data: CreateUserDto = {
        email: 'Ludson01@hotmail.com',
        name: 'ludson01',
        password: '12346',
        username: 'ludson01',
      };

      await userService.createUser(data);

      const result = await userService.getUserById('1');

      expect(result).toHaveProperty('id');
      expect(result?.email).toBe('Ludson01@hotmail.com');
    });
  });
});
