import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutDetail, DonutModel } from '../../models/donuts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  donutResult:DonutModel = {} as DonutModel;
  constructor(private donutService:DonutsService) {}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.donutService.getDonuts().subscribe((response:DonutModel) => {
      console.log(response);

      this.donutResult = response;
    })
  }

}
