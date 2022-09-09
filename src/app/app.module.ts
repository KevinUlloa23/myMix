import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { Productservice } from './service/product.service';
import { IntegrationsComponent } from './products/pages/integrations/integrations.component';






@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    IntegrationsComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,



  ],
  providers: [ Productservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
