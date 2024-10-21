import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  lengt:number=0;
  breadt:number=0;
  result:number=0;
  area(){
    this.result=this.lengt*this.breadt;
  }
  perimeter(){
    this.result=2*(this.lengt+this.breadt);
  }

}
