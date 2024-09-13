import { Component } from '@angular/core';
import { DonutDetail } from '../../models/donuts';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Array<{ donut: DonutDetail; price: number }> = [];
  totalCost: number = 0;
  totalCalories: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalCost();
    this.calculateTotalCalories();
  }

  //Calculate the total cost of items in the cart
  calculateTotalCost(){
    this.totalCost = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  //Calculate total calories (For donuts? Why do that to yourself)
  calculateTotalCalories(){
    this.totalCalories = this.cartItems.reduce((sum, item) => sum + item.donut.calories, 0)
  }
  //Clear the cart
  buy(){
    this.cartService.buy();

    //Admittedly not sure why I had to do this twice, since I already put it in the other .buy method
    this.cartItems = [];
    this.totalCost = 0;
    this.totalCalories = 0;
  }
}
