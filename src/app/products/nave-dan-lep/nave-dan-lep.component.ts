import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave-dan-lep',
  templateUrl: './nave-dan-lep.component.html',
  styleUrls: ['./nave-dan-lep.component.scss']
})
export class NaveDanLepComponent implements OnInit {

  constructor(private cart: CartService,private router:Router) {}
  name = 'navedan';
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
