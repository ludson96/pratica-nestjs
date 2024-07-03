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

export type FileDto = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};
