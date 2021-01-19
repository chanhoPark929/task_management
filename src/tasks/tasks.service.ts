import { Injectable } from '@nestjs/common';
import { Task, Taskstatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
	private tasks: Task[] = [];
	
	getAllTasks(): Task[] {
		return this.tasks;
	}

	createTask(createTaskDto: CreateTaskDto): Task {
		const { title, description } = createTaskDto;
		
		const task: Task = {
			id: uuid(),
			title,
			description,
			status: Taskstatus.OPEN,
		};

		this.tasks.push(task);
		return task;
	}
}
