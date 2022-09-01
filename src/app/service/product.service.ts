import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../products/data';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  product: any;
  products: any = [];

  constructor(private router: Router) {
    this.products = products;
  }

  setProductData(product: any): void {
    this.product = product;
  }

  getProductDataById(): any {
    return this.product;
  }

  getData() {
    return this.products;
  }

  editItem(data: any) {
    const result = this.products.find((product: any) => product.productId === data.productId);
    const index = this.products.indexOf(result);
    this.products[index] = data;

    Swal.fire({
      title: 'Success!',
      text: 'The product has been edited!',
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then(res => {
      if (res.isConfirmed)
        this.router.navigate(['/producs/core-producs']);
    })
  }

}
