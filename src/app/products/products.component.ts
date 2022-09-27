import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title : any = ''
  PhoneData :any = []
  PhoneData_1 : any = []
  modal_data : any;
  item : any;
  cartItemList :any;
  totalItem :any;

  constructor(private api: AppService,
              private cartService : CartService) { }

  ngOnInit():void
  {
    this.getAllPhone();
    
  }
  getAllPhone(){
    this.api.getPhone().subscribe(res=>{
      this.PhoneData = res.products; //original data
      this.PhoneData_1 = res.products; //backup data
      // console.log(this.PhoneData);
      // console.log(this.PhoneData_1)
      this.PhoneData.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }

 search()
 {
    if(this.PhoneData && this.title == '')
    {
      console.log(this.PhoneData)
      return this.PhoneData;
      
    }
    else if( this.title !== '')
    {
      this.PhoneData_1 = this.PhoneData_1.filter((res:any) =>
      {
        return res.title.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())
      })
      console.log(this.PhoneData_1)
    }
    
  }
   
 pass_data_modal(data:any)
 {
   this.modal_data = data
 }
 
 getdata()
 {
  this.cartService.getProducts()
 }

 addtocart(row :any )
 {
  alert("cart added")
  this.cartService.addtoCart(row)
 }

}





 
  
  
 
  
 

 
   

