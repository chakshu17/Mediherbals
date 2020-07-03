import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sperm-care-capsule',
  templateUrl: './sperm-care-capsule.component.html',
  styleUrls: ['./sperm-care-capsule.component.scss']
})
export class SpermCareCapsuleComponent implements OnInit {

  constructor(private cart: CartService,private router:Router) {}
  name = 'spermcare';
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
