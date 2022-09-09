import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreProducsComponent } from './pages/core-producs/core-producs.component';
import { CrearProductComponent } from './pages/crear-product/crear-product.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';



const routes: Routes = [
  {
    path: '',
//    component: CoreProducsComponent,
    children: [
    { path: 'core-producs', component: CoreProducsComponent },
    { path: 'crear-product', component: CrearProductComponent },
    { path: 'crear-product/:id', component: CrearProductComponent },
    { path: 'integrations', component: IntegrationsComponent },

    ]
 }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
