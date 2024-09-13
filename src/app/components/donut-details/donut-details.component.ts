import { Component } from '@angular/core';
import { DonutDetail } from '../../models/donuts';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DonutsService } from '../../services/donuts.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  donutResult:DonutDetail = {} as DonutDetail;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private donutService:DonutsService,
    private cartService: CartService

  ) {}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));

      this.donutService.getDonutById(id).subscribe((donut: DonutDetail) => {
        this.donutResult = donut;
      });
    });
  }
   // Add donut to the cart
   addToCart(): void {
    this.cartService.addToCart(this.donutResult);
    //Alert shows a pop window letting the user know it was added
    alert(`${this.donutResult.name} has been added to the cart!`);
  }
}
