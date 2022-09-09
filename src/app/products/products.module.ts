import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreProducsComponent } from './pages/core-producs/core-producs.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';


import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { CrearProductComponent } from './pages/crear-product/crear-product.component';






@NgModule({
  declarations: [
    CoreProducsComponent,
    ProductsListComponent,
    CrearProductComponent,


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
