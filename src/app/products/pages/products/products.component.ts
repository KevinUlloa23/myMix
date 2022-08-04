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
  status: string,

}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {


   ELEMENT_DATA: PeriodicElement[] = [
    {brandName: 'double edited', productId: 10, productName: 'hamburguer',         SKU: 'ajshdasdjhgvas564da7sd6r', price: 6.99, status: 'active'},
    {brandName: 'double edited', productId: 11, productName: 'Bacon Cheeseburger', SKU: 'jbmnsdbvsjdhfg76534kjsdf', price: 8.99, status: 'active'},
    {brandName: 'edited',        productId: 12, productName: 'Cowboy Burger',      SKU: 'mnblkajsy6ytqj323js3r3jb', price: 6.99, status: 'active'},
    {brandName: 'double edited', productId: 13, productName: 'Itallian Special',   SKU: 'msdfbsjdhfglkjas9893bja6', price: 6.99, status: 'active'},
    {brandName: 'edited',        productId: 14, productName: 'Buffalo Chicken',    SKU: 'a,nmbsmnabsddkqjuyyqe223', price: 4.99, status: 'active'},
    {brandName: 'double edited', productId: 15, productName: 'Chicken Salad',      SKU: 'lalaksjshte23us8basgasd3', price: 2.99, status: 'active'},
    {brandName: 'edited',        productId: 16, productName: 'Wing Combos',        SKU: 'asd3215asdnnusd8adhafag8', price: 3.99, status: 'active'},
    {brandName: 'double edited', productId: 17, productName: '10 Wings',           SKU: 'nd342567aerewquyeopnashd', price: 9.99, status: 'active'},
    {brandName: 'edited',        productId: 18, productName: 'Small Cake',         SKU: 'asdmfbj83e4efjksgdf32hsd', price: 7.99, status: 'active'},
    {brandName: 'double edited', productId: 19, productName: 'Coke',               SKU: 'asmndvashgcfd365saas55as', price: 9.99, status: 'active'},
    {brandName: 'double edited', productId: 20, productName: 'hamburguer',         SKU: 'ajshdasdjhgvas564da7sd6r', price: 6.99, status: 'active'},
    {brandName: 'double edited', productId: 21, productName: 'Bacon Cheeseburger', SKU: 'jbmnsdbvsjdhfg76534kjsdf', price: 8.99, status: 'active'},
    {brandName: 'edited',        productId: 22, productName: 'Cowboy Burger',      SKU: 'mnblkajsy6ytqj323js3r3jb', price: 6.99, status: 'active'},
    {brandName: 'double edited', productId: 23, productName: 'Itallian Special',   SKU: 'msdfbsjdhfglkjas9893bja6', price: 6.99, status: 'active'},
    {brandName: 'edited',        productId: 24, productName: 'Buffalo Chicken',    SKU: 'a,nmbsmnabsddkqjuyyqe223', price: 4.99, status: 'active'},
    {brandName: 'double edited', productId: 25, productName: 'Chicken Salad',      SKU: 'lalaksjshte23us8basgasd3', price: 2.99, status: 'active'},
    {brandName: 'edited',        productId: 26, productName: 'Wing Combos',        SKU: 'asd3215asdnnusd8adhafag8', price: 3.99, status: 'active'},
    {brandName: 'double edited', productId: 27, productName: '10 Wings',           SKU: 'nd342567aerewquyeopnashd', price: 9.99, status: 'active'},
    {brandName: 'edited',        productId: 28, productName: 'Small Cake',         SKU: 'asdmfbj83e4efjksgdf32hsd', price: 7.99, status: 'active'},
    {brandName: 'double edited', productId: 29, productName: 'Coke',               SKU: 'asmndvashgcfd365saas55as', price: 9.99, status: 'active'},
  ];

  displayedColumns: string[] = [ 'brandName', 'productId', 'productName', 'SKU', 'price', 'alcohol', 'status'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor( private productService: Productservice,
               private router: Router ) {
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToDetails( product:any ) {
    localStorage.setItem('product', JSON.stringify(product) )
    this.router.navigate(['producs/crear-product/'+ product.productId] );
  }


}
