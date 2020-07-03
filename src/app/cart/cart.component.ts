import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) {}
  card:Product[]=[]

  ngOnInit(): void {
 this.card=this.cart.getproduct();
  }
  remove(name){
    console.log(name);
    this.card.splice(this.card.indexOf(name),1)

  }

}
