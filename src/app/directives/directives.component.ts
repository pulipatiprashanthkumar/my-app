import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isValid:boolean=false;

  age:number=20;
  ages:number[]=[10,20,30,40,50,60];


  states:string[]=['TG','AP','KA','TN','OD','JK','MH','MP','UP','BI','WB'];

  users:any=[
    {name:'ppk',age:32},
    {name:'ps',age:27},
    {name:'pv',age:25},
    {name:'gm',age:34},
  ]

  products:any=[
    {name:'Pen',price:10,rating:3.5},
    {name:'laptop',price:50000,rating:4.3},
    {name:'mobile',price:25000,rating:4.7},
  ]


}
