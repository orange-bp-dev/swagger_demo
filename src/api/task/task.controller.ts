import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('/task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getTasks() {}

  @Get('/:id')
  getTaskById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }
}
