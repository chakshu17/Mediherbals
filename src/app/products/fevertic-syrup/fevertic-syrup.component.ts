import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fevertic-syrup',
  templateUrl: './fevertic-syrup.component.html',
  styleUrls: ['./fevertic-syrup.component.scss']
})
export class FeverticSyrupComponent implements OnInit {

  constructor(private cart: CartService,private router:Router) {}
  name = 'fevertics';
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
