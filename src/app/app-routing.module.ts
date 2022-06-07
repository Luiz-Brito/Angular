import { FinalComponent } from './views/final/final.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "pedido",
  component: PedidoComponent
}, {
  path: "conclusao",
  component: FinalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
