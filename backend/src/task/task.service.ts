import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const task = this.taskRepository.create(createTaskDto);
      console.log('🚀 ~ TaskService ~ create ~ task:', task);
      return await this.taskRepository.save(task);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async fetchAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
