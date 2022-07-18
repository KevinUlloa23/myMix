import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreProducsComponent } from './pages/core-producs/core-producs.component';
import { ProductsComponent } from './pages/products/products.component';


import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';






@NgModule({
  declarations: [
    CoreProducsComponent,
    ProductsComponent,
    CrearUsuarioComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule
  ],
  exports: [
    RouterModule,
  ]
})
export class ProductsModule { }
