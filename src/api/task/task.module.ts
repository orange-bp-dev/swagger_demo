import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';
import { Cache } from 'cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository]), CacheModule.register()],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
