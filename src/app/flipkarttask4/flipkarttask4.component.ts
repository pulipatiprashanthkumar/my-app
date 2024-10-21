import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkarttask4',
  templateUrl: './flipkarttask4.component.html',
  styleUrls: ['./flipkarttask4.component.css']
})
export class Flipkarttask4Component {


  name:string='';
  experience:number=0;
  package:number=0;
  role:string='';
  term:string='';
  


  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
]

create(){
  let employee={
    name:this.name,
    experience:this.experience,
    package:this.package,
    role:this.role
  }
  this.employees.push(employee);
}
       
delete(i:number){
  this.employees.splice(i,1);
}

hike20(){
  this.employees=this.employees.map(employee=>{
    employee.package=employee.package*(120/100);
    return employee;
  })
}

festivalbonus(){
  this.employees=this.employees.map(employee=>{
    employee.package=employee.package+30000;
    return employee;
  })
}

search(){
  this.employees=this.employees.filter((employee)=>employee.name.includes(this.term));
}
explh(){
  this.employees.sort((a,b)=>a.experience-b.experience);
}
exphl(){
  this.employees.sort((a,b)=>b.experience-a.experience);
}
packlh(){
  this.employees.sort((a,b)=>a.package-b.package);
}
packhl(){
  this.employees.sort((a,b)=>b.experience-a.experience);
}

expenditure(){
  var total=this.employees.reduce((sum,employee)=>sum+employee.package,0);
  alert('total expenditure'+total);
}

totalemployees(){
  alert('Total Employees:'+this.employees.length);
}


}
