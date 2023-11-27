import {CartItem} from "./cart-item";

export class OrderItem {

  orderItemId: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productId: string;

  constructor(cartItem: CartItem) {
    this.orderItemId = cartItem.id;
    this.imageUrl = cartItem.imageUrl;
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    this.productId = cartItem.id;
  }


}
