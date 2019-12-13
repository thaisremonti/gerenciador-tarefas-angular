import { Routes } from '@angular/router';
import { ListaTarefaComponent } from './lista-tarefa';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/lista-tarefa'
  },
  {
    path: 'tarefas/lista-tarefa',
    component: ListaTarefaComponent
  },
];
