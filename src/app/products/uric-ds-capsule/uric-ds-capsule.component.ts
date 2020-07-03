import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uric-ds-capsule',
  templateUrl: './uric-ds-capsule.component.html',
  styleUrls: ['./uric-ds-capsule.component.scss']
})
export class UricDsCapsuleComponent implements OnInit {

  constructor(private cart: CartService,private router:Router) {}
  name = 'uricds';
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
