import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
