import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: any = [];
  SearchText:string='';
  coloumn:string='';
  order:string='';

  public studentForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),

  })

  constructor(private _studentsServices:StudentsService) {
    _studentsServices.getStudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internal Server Error')
      }
    )
  }
 
  delete(id:string){
    this._studentsServices.deleteStudents(id).subscribe(
      (data:any)=>{
        alert("Deleted SUCESSFULLY !!!!")
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
    
  }
  submit(){
    this._studentsServices.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Created SUCESSFULLY !!!!")
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )

  }
  search(){
    this._studentsServices.filteredStudents(this.SearchText).subscribe(
      (data:any)=>{
        this.students = data;

      },
      (err:any)=>{
        alert(err.error);
      }
    )

  }
  sort(){
    this._studentsServices.sortStudents(this.coloumn,this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )

  }

}
