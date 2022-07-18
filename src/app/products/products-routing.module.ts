import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreProducsComponent } from './pages/core-producs/core-producs.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';



const routes: Routes = [
  {
    path: '',
//    component: CoreProducsComponent,
    children: [
    { path: 'core-producs', component: CoreProducsComponent },
    { path: 'crear-usuario', component: CrearUsuarioComponent },

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
