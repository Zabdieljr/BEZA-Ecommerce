import {Product} from "./product";

export class CartItem {
  //added by me  id for products

  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  //add constructor

  constructor(product: Product) {
    // @ts-ignore
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.quantity = 1;

  }


}
