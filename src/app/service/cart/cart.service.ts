import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  products:Product[]=[]
 adddproducts(name:string,quantity:number,price:number){
   this.products.push({

     name:name,
     quantity:quantity,
     price:price
   });

 }
 getproduct(){
  return [...this.products];

 }
}
