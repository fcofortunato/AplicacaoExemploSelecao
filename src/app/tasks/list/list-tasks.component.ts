import { Component, OnInit } from '@angular/core';

import ITask from './../../shared/task.inteface';
import { TaskService } from './../../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: ITask[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.listAll();
  }

  listAll(): void {
    this.tasks = this.taskService.listAll();
  }

  searchByString(event: any): void {
    const { value } = event.target;

    if (value === '') {
      return this.listAll();
    }

    this.listAll();

    this.tasks = this.tasks.filter(
      (task: ITask) =>
        this.checkValue(task.title, value) ||
        this.checkValue(task.description, value) ||
        this.checkValue(task.assign, value)
    );
  }

  checkValue(value: string, filter: string): boolean {
    return value.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1;
  }

  remove(event: any, task: ITask): void {
    event.preventDefault();

    this.taskService.delete(task.id);
    this.listAll();
  }

  completed(event: any, task: ITask): void {
    event.preventDefault();

    task.status = 'Completo';

    this.taskService.update(task);
    this.taskService.delete(task.id);
    this.listAll();
  }
}
