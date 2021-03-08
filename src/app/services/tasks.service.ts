import { Injectable } from '@angular/core';

import ITask from '../shared/task.inteface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  stateKey: string;

  constructor() {
    this.stateKey = 'tasks';
  }

  listAll(): ITask[] {
    const tasks = localStorage.getItem(this.stateKey);

    return tasks ? JSON.parse(tasks) : [];
  }

  create(task: ITask): void {
    const tasks = this.listAll();

    task.id = new Date().getTime();
    tasks.push(task);

    localStorage.setItem(this.stateKey, JSON.stringify(tasks));
  }

  findById(id: number): ITask {
    const tasks: ITask[] = this.listAll();

    return tasks.find((task: ITask) => task.id === id);
  }

  update(task: ITask): void {
    const tasks: ITask[] = this.listAll();

    tasks.forEach((value: ITask, index: number, allTasks: ITask[]) => {
      if (task.id === value.id) {
        allTasks[index] = task;
      }
    });

    localStorage.setItem(this.stateKey, JSON.stringify(tasks));
  }

  delete(id: number | undefined): void {
    if (!id) {
      return;
    }

    let tasks: ITask[] = this.listAll();

    tasks = tasks.filter((task: ITask) => task.id !== id);

    localStorage.setItem(this.stateKey, JSON.stringify(tasks));
  }
}
