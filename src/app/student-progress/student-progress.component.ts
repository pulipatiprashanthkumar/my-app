import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.css']
})
export class StudentProgressComponent {
  public studentprogressForm: FormGroup=new FormGroup({
    name:new FormControl(),
    class:new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
    fathers_name: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob:new FormControl(),
    address: new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state: new FormControl('',[Validators.required]),
      pincode:new FormControl(),
    }),
    company: new FormGroup({
      name: new FormControl(),
      package: new FormControl('',[Validators.required,Validators.max(2500000),Validators.min(1000000)] ),
    }),
    type: new FormControl(),
    student_detail: new FormArray([])
    
  })
  get student_detailsFormArray(){
    return this.studentprogressForm.get('student_detail')as FormArray;

  } 
  add_Students(){
    this.student_detailsFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.max(100),Validators.min(0)]),
      })
    )
  }
  delete(i:number){
    this.student_detailsFormArray.removeAt(i);
  }
  
  constructor(){
    this.studentprogressForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.studentprogressForm.addControl('busFee', new FormControl());
          this.studentprogressForm.removeControl('hostelFee');
        }
        else{
          this.studentprogressForm.addControl('hostelFee',new FormControl());
          this.studentprogressForm.removeControl('busFee');
        }
      }
    )
  }

  submit(){
    console.log(this.studentprogressForm.value);
  }


}


    


