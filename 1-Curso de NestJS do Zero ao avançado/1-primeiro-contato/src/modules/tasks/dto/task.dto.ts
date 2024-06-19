export type CreateTaskDto = {
  title: string;
  description: string;
  priority: string;
  status: string;
};

export type ResponseTaskDto = {
  id: string;
  startAt: Date;
  endAt: Date;
} & CreateTaskDto;
