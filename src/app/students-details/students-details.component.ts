import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  public student:any={};
  constructor(private _activatedRoute:ActivatedRoute,private _studentService:StudentsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
        ) 
      }
    )
  }

}
