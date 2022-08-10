import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  product: any;
  products: any = [];


  constructor(private router: Router) {
    this.products = [
      {
        brandName: 'doubleEdited', productId: 10,
        productName: 'hamburguer',
        SKU: 'ajshdasdjhgvas564da7sd6r',
        price: 6.99,
        status: 'active',
        internalName: 'hamburguer modified',
        displayName: 'hamburguer modified',
        description: 'lorem ipsum hamburguer',
        id: 23

      },
      {
        brandName: 'doubleEdited', productId: 11,
        productName: 'Bacon Cheeseburger',
        SKU: 'jbmnsdbvsjdhfg76534kjsdf',
        price: 8.99,
        status: 'active',
        internalName: 'Bacon modified',
        displayName: 'Bacon modified',
        description: 'lorem ipsum Bacon',
        id: 23
      },
      {
        brandName: 'edited', productId: 12,
        productName: 'Cowboy Burger',
        SKU: 'mnblkajsy6ytqj323js3r3jb',
        price: 6.99,
        status: 'active',
        internalName: 'Cowboy modified',
        displayName: 'Cowboy modified',
        description: 'lorem ipsum Cowboy',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 13,
        productName: 'Itallian Special',
        SKU: 'msdfbsjdhfglkjas9893bja6',
        price: 6.99,
        status: 'active',
        internalName: 'Itallian modified',
        displayName: 'Itallian modified',
        description: 'lorem ipsum Itallian',
        id: 23
      },
      {
        brandName: 'edited', productId: 14,
        productName: 'Buffalo Chicken',
        SKU: 'a,nmbsmnabsddkqjuyyqe223',
        price: 4.99,
        status: 'active',
        internalName: 'Buffalo modified',
        displayName: 'Buffalo modified',
        description: 'lorem ipsum Buffalo',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 15,
        productName: 'Chicken Salad',
        SKU: 'lalaksjshte23us8basgasd3',
        price: 2.99,
        status: 'active',
        internalName: 'Chicken modified',
        displayName: 'Chicken modified',
        description: 'lorem ipsum Chicken',
        id: 23
      },
      {
        brandName: 'edited', productId: 16,
        productName: 'Wing Combos',
        SKU: 'asd3215asdnnusd8adhafag8',
        price: 3.99,
        status: 'active',
        internalName: 'Wing modified',
        displayName: 'Wing modified',
        description: 'lorem ipsum Wing',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 17,
        productName: '10 Wings',
        SKU: 'nd342567aerewquyeopnashd',
        price: 9.99,
        status: 'active',
        internalName: '10 Wings modified',
        displayName: '10 Wings modified',
        description: 'lorem ipsum 10 Wings',
        id: 23
      },
      {
        brandName: 'edited', productId: 18,
        productName: 'Small Cake',
        SKU: 'asdmfbj83e4efjksgdf32hsd',
        price: 7.99,
        status: 'active',
        internalName: 'Small Cake modified',
        displayName: 'Small Cake modified',
        description: 'lorem ipsum Small Cake',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 19,
        productName: 'Coke',
        SKU: 'asmndvashgcfd365saas55as',
        price: 9.99,
        status: 'active',
        internalName: 'Coke modified',
        displayName: 'Coke modified',
        description: 'lorem ipsum Coke',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 20,
        productName: 'hamburguer rice',
        SKU: 'ajshdasdjhgvas564da7sd6r',
        price: 6.99,
        status: 'active',
        internalName: 'hamburguer rice modified',
        displayName: 'hamburguer rice modified',
        description: 'lorem ipsum hamburguer rice',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 21,
        productName: 'Cucayo Cheeseburger',
        SKU: 'jbmnsdbvsjdhfg76534kjsdf',
        price: 8.99,
        status: 'active',
        internalName: 'Cucayo Cheeseburger modified',
        displayName: 'Cucayo Cheeseburger modified',
        description: 'lorem ipsum Cucayo Cheeseburger',
        id: 23
      },
      {
        brandName: 'edited', productId: 22,
        productName: '"Cowboys from hell" Burger',
        SKU: 'mnblkajsy6ytqj323js3r3jb',
        price: 6.99,
        status: 'active',
        internalName: '"Cowboys from hell" Burger modified',
        displayName: '"Cowboys from hell" Burger modified',
        description: 'lorem ipsum "Cowboys from hell" Burger',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 23,
        productName: 'Itallian "rocky" Special',
        SKU: 'msdfbsjdhfglkjas9893bja6',
        price: 6.99,
        status: 'active',
        internalName: 'Itallian "rocky" Special modified',
        displayName: 'Itallian "rocky" Special modified',
        description: 'lorem ipsum Itallian "rocky" Special',
        id: 23
      },
      {
        brandName: 'edited', productId: 24,
        productName: 'Buffalo Grill',
        SKU: 'a,nmbsmnabsddkqjuyyqe223',
        price: 4.99,
        status: 'active',
        internalName: 'Buffalo Grill modified',
        displayName: 'Buffalo Grill modified',
        description: 'lorem ipsum  Buffalo Grill',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 25,
        productName: 'Chicken and pork Salad',
        SKU: 'lalaksjshte23us8basgasd3',
        price: 2.99,
        status: 'active',
        internalName: 'Chicken and pork Salad modified',
        displayName: 'Chicken and pork Salad modified',
        description: 'lorem ipsum Chicken and pork Salad',
        id: 23
      },
      {
        brandName: 'edited', productId: 26,
        productName: 'Legs Combos',
        SKU: 'asd3215asdnnusd8adhafag8',
        price: 3.99,
        status: 'active',
        internalName: 'Legs Combos modified',
        displayName: 'Legs Combos modified',
        description: 'lorem ipsum Legs Combos',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 27,
        productName: '100 Wings',
        SKU: 'nd342567aerewquyeopnashd',
        price: 9.99,
        status: 'active',
        internalName: '100 Wings modified',
        displayName: '100 Wings modified',
        description: 'lorem ipsum 100 Wings',
        id: 23

      },
      {
        brandName: 'edited', productId: 28,
        productName: 'Biggie Small Cake',
        SKU: 'asdmfbj83e4efjksgdf32hsd',
        price: 7.99,
        status: 'active',
        internalName: 'Biggie Small Cake modified',
        displayName: 'Biggie Small Cake modified',
        description: 'lorem ipsum Biggie Small Cake',
        id: 23
      },
      {
        brandName: 'doubleEdited', productId: 29,
        productName: 'Coke roach soda',
        SKU: 'asmndvashgcfd365saas55as',
        price: 9.99,
        status: 'active',
        internalName: 'Coke roach soda modified',
        displayName: 'Coke roach soda modified',
        description: 'lorem ipsum  Coke roach soda',
        id: 23
      },
    ]
  }

  setProductData(product: any): void {
    this.product = product;
  }

  getProductDataById(): any {
    return this.product;
  }

  getData() {
    return this.products

  }

  editItem(data:any) {

    for (let index = 0; index < this.products.length; index++) {
      if ( this.products[index].productId === data.productId ) {
        this.products[index] = data

      }

      console.log(this.products);

    }


    // for (const item of this.products) {
    //   if ( item.productId === data.productId ) {
    //  item = data

    //   }
    // }
    // const item = this.products.filter( (item:any) => item.productId === data.productId )
    // console.log(item);


  }





}
