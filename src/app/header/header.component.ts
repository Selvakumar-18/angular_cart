import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem : number = 0

  result : any = []
  title : any

  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.totalItem = res.length;
    })
  }

  // search(){
  //   this.product.search()
  //   .subscribe((res :any)=>{
  //     this.result = res
  //   })
    
    
    
  }
  

