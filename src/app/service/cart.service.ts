import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any = []
  public PhoneData = new BehaviorSubject <any>([])

  constructor() { }

  getProducts()
  {
    return this.PhoneData.asObservable()  
  }

  setProducts(product:any)
  {
    this.cartItemList.push(...product)
  }

  addtoCart(product:any)
  {
    this.cartItemList.push(product)
    // console.log(this.cartItemList)
    this.PhoneData.next(this.cartItemList)
    this.getTotalPrice()
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal
  }

  removecartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }

    })
  }
  removeAllCart(){
    this.cartItemList = []
    this.PhoneData.next(this.cartItemList)
  }

}
