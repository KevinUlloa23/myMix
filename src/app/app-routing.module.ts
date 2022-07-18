import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'producs',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule )
  }

]


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
