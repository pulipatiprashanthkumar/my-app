import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  name:string='';
  names:string[]=[];
  
  submit(){
    
    this.names.push(this.name);  
  }
  delete(){
    this.names.pop();
  }

// -------------Student Registration------------------//

  StudentName:string='';
  StudentAge:number=0;
  students:any=[];


create(){

    let student={
      name:this.StudentName,
      age:this.StudentAge
  
    }
    this.students.push(student);
  }
  
}






