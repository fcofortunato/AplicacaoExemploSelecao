import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks.routing';
import { TasksComponent } from './tasks.component';
import { CreateTaskComponent } from './create/create-task.component';
import { ListTasksComponent } from './list/list-tasks.component';

@NgModule({
  declarations: [TasksComponent, ListTasksComponent, CreateTaskComponent],
  imports: [BrowserModule, CommonModule, FormsModule, TasksRoutingModule],
  providers: [],
})
export class TasksModule { }
