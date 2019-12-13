import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/tarefas/lista-tarefa',
      pathMatch: 'full'
    },

    //... operador do typescript que permite concatenar arrays
    ...TarefaRoutes
];

@NgModule({
  //forRoot padrao do angular - garante que o modulo de rotas seja unica na aplicacao
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
