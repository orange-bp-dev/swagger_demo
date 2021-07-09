import {
  Injectable,
  NotFoundException,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { Cache } from 'cache-manager';
import axios from 'axios';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getTaskById(id: number): Promise<Task> {
    const cached_task: Task = await this.cacheManager.get('task');

    if (cached_task) {
      return cached_task;
    } else {
      const found = await this.taskRepository.findOne({ where: { id } });
      if (!found) {
        throw new NotFoundException(`Task with ID ${id} no found`);
      }
      await this.cacheManager.set('task', found, { ttl: 3600 });
      return found;
    }
    // return found;
  }
}
