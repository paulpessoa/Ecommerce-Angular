import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  listSelectedFilms: Film[] = [];
  totalPrice|: number;
  disabled = false;
  hide = true;
  form: any;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.totalPrice = this.checkoutService.totalPrice;
    this.listSelectedFilms = this.checkoutService.listSelectedFilms;
    this.toggleButton();
  }
  toggleButton() {
    if (this.listSelectedFilms.length == 0) {
      this.disabled = true;
    }
  }
}
