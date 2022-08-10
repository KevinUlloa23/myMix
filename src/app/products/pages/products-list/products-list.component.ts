import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Productservice } from 'src/app/service/product.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  brandName: string;
  productName: string;
  productId: number;
  SKU: string;
  price: number;
  status: string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [

  ];

  displayedColumns: string[] = [
    'brandName',
    'productId',
    'productName',
    'SKU',
    'price',
    'alcohol',
    'status',

  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: Productservice, private router: Router) {}

  ngOnInit(): void {
    this.ELEMENT_DATA    = this.productService.getData();
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.ELEMENT_DATA;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToDetails(product: any) {
    this.productService.setProductData(product);
    this.router.navigate(['producs/crear-product/' + product.productId]);
  }









}
