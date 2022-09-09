import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Productservice } from '../../../service/product.service';
import { PeriodicElement } from '../products-list/products-list.component';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./products-list.component.scss'],
  styles: [
  ]
})
export class IntegrationsComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [

  ];

  displayedColumns: string[] = [
    'id',
    'name',
    'active',
    'type',
    'integration',
    'edit',


  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor( private productService: Productservice ) { }

  ngOnInit(): void {
    this.ELEMENT_DATA    = this.productService.getData();
    this.dataSource.data = this.ELEMENT_DATA;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
