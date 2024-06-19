import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
  username: z.string({
    required_error: 'Username is required',
  }),
  email: z.string().email(),
});

export class CreateUserSchemaDto extends createZodDto(CreateUserSchema) {}

export const CreatedUserResponseSchemaDto = CreateUserSchema.omit({
  password: true,
});

export type CreatedUserResponseSchemaDto = z.infer<
  typeof CreatedUserResponseSchemaDto
>;
