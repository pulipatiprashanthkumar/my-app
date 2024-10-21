import { Component } from '@angular/core';
import { FlipkartAPIService } from '../flipkart-api.service';

@Component({
  selector: 'app-flipkart-api',
  templateUrl: './flipkart-api.component.html',
  styleUrls: ['./flipkart-api.component.css']
})
export class FlipkartAPIComponent {

  flipkartapis:any=[];
  constructor(private _flipkartAPIService:FlipkartAPIService){
    _flipkartAPIService.getFlipkartapi().subscribe(
      (data:any)=>{
        this.flipkartapis=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
        
    )
  }
    
    
    
  

}
