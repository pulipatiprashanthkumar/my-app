import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  age:number = 32;
  name:string = "PRASHANTH";
  phone:string= '+91 ';
  isInvalid:boolean= true;

submit(){
  alert("submit clicked");
}

typing(){
  alert("typing");
}





}
