import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { TaskService } from './../../services/tasks.service';
import ITask from './../../shared/task.inteface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit, OnDestroy {
  task: ITask;
  isValidForm = true;

  private subscription: Subscription;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    //
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      if (params.id) {
        return this.setValue(this.taskService.findById(Number(params.id)));
      }

      return this.setValue({
        title: '',
        deadline: null,
        description: '',
        assign: 'ESIG',
        priority: 'Alta',
        status: 'Em Andamento',
      });
    });
  }

  setValue(task: ITask): void {
    this.task = task;
  }

  create(): void {
    this.isValidForm = true;

    Object.values(this.task).map((task: ITask) => {
      if (!task) {
        this.isValidForm = false;
      }
    });

    if (!this.isValidForm) {
      return;
    }

    this.taskService.create(this.task);

    this.setValue({
      title: '',
      deadline: null,
      description: '',
      assign: 'ESIG',
      priority: 'Alta',
      status: 'Em Andamento',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
