import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BanktaskService } from '../banktask.service';

@Component({
  selector: 'app-create-banktask',
  templateUrl: './create-banktask.component.html',
  styleUrls: ['./create-banktask.component.css']
})
export class CreateBanktaskComponent {

  public banktaskForm:FormGroup=new FormGroup({

    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl()
   
  });

  constructor(private _banktaskService:BanktaskService){}

  submit(){
    console.log(this.banktaskForm.value);
    this._banktaskService.createBanktask(this.banktaskForm.value).subscribe(
      (data:any)=>{
        alert('Created Successfully!!');
      },
      (err:any)=>{
        alert(err.error);
      }

    )
  }


}