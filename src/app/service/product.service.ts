import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  product: any;

  constructor() {}

  setProductData(product: any): void {
    this.product = product;
  }

  getProductData(): any {
    return this.product;
  }
}
