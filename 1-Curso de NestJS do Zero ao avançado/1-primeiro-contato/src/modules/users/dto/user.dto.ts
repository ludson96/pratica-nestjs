export type CreateUserDto = {
  name: string;
  username: string;
  password: string;
  email: string;
};

export type ResponseUserDto = {
  id: string;
  createdAt: Date;
} & CreateUserDto;

export type UsernameAndEmail = {
  username: string;
  email: string;
};
