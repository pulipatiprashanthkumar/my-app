import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-flipkart',
  templateUrl: './pre-flipkart.component.html',
  styleUrls: ['./pre-flipkart.component.css']
})
export class PreFlipkartComponent {


  productName:string='';
  price:number=0;
  rating:number=0;
  deliveryDate:any;
  freeDelivery:boolean=true;

  products:any=[];

  submit(){
    let product ={
      name:this.productName,
      price:this.price,
      rating:this.rating,
      deliverydate:this.deliveryDate,
      freedelivery:this.freeDelivery
    }
    this.products.push(product);

  }
  delete(i:number){
    this.products.splice(i,1);
  }


}
