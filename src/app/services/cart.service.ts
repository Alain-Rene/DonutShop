import { Injectable } from '@angular/core';
import { DonutDetail } from '../models/donuts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<{donut: DonutDetail; price: number}> = [];
  constructor() { }

  addToCart(donut: DonutDetail){
    let cartItem = {donut, price: 1.00}
    this.cartItems.push(cartItem);
  }

  getCartItems(): Array<{donut: DonutDetail; price: number}> {
    return this.cartItems;
  }

  //Clears the cart
  buy(): void {
    this.cartItems = [];
  }
}
