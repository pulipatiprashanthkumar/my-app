import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  rad:number=0
  result:number=0

  area(){
    this.result=3.14*(this.rad*this.rad);

  }
  perimeter(){
    this.result=2*3.14*this.rad;
  }

}
