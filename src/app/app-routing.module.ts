import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaReadComponent } from './components/views/estacionamento/pessoa-read/pessoa-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'estacionamento',
  component: PessoaReadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
