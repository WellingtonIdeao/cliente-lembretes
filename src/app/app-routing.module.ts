import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarLembreteComponent } from './pages/criar-lembrete/criar-lembrete.component';
import { ListaLembreteComponent } from './pages/lista-lembrete/lista-lembrete.component';

const routes: Routes = [
  {path: '', component: ListaLembreteComponent},
  {path: 'lembrete/criar', component: CriarLembreteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }