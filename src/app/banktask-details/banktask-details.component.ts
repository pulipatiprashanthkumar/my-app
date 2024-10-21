import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BanktaskService } from '../banktask.service';

@Component({
  selector: 'app-banktask-details',
  templateUrl: './banktask-details.component.html',
  styleUrls: ['./banktask-details.component.css']
})
export class BanktaskDetailsComponent {
public banktask:any={};
  constructor(private _activatedRoute:ActivatedRoute,private _banktaskService:BanktaskService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // api call with data:id
        _banktaskService.getBanktask(data.id).subscribe(
          (data:any)=>{
            this.banktask=data;

          }
            
          )
      
      }
    )
  }

}
