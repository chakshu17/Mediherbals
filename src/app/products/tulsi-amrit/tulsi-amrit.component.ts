import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tulsi-amrit',
  templateUrl: './tulsi-amrit.component.html',
  styleUrls: ['./tulsi-amrit.component.scss']
})
export class TulsiAmritComponent implements OnInit {

  constructor(private cart: CartService,private router:Router) {}
  name = 'TulsiAmrit';
  price = 100;
  quantity = 1;

  onclick() {
    this.cart.adddproducts(this.name, this.quantity, this.price);
    this.cart.getproduct();
  }

  ViewCart() {
    this.router.navigate(['/cart'])
  }

  ngOnInit(): void {
  }

}
