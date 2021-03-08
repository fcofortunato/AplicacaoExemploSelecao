import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTaskComponent } from './create/create-task.component';
import { ListTasksComponent } from './list/list-tasks.component';

export const routes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListTasksComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CreateTaskComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: CreateTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }
