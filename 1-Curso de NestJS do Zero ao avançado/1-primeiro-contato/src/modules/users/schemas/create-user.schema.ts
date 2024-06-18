import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string(),
  password: z.string(),
  username: z.string(),
  email: z.string().email(),
});

export class CreateUserSchemaDto extends createZodDto(CreateUserSchema) {}
