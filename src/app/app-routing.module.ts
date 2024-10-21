import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { PreFlipkartComponent } from './pre-flipkart/pre-flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Flipkarttask4Component } from './flipkarttask4/flipkarttask4.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BanktaskComponent } from './banktask/banktask.component';
import { FlipkartAPIComponent } from './flipkart-api/flipkart-api.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBanktaskComponent } from './create-banktask/create-banktask.component';
import { StudentsComponent } from './students/students.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BanktaskDetailsComponent } from './banktask-details/banktask-details.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",canActivate:[AuthenticationGuard], component:DashboardsComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'tasks',component:TasksComponent},
    {path:'pre-flipkart',component:PreFlipkartComponent},
    {path:'higher-order',component:HigherOrderComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'flipkarttask4',component:Flipkarttask4Component},
    {path:'vehicle',component:VehicleComponent},
    {path:'banktask',component:BanktaskComponent},
    {path:'flipkartAPI',component:FlipkartAPIComponent},
    {path:'mail',component:MailComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-banktask',component:CreateBanktaskComponent},
    {path:'students',component:StudentsComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student-progress',component:StudentProgressComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'banktask-details/:id',component:BanktaskDetailsComponent},
    {path:'students-details/:id',component:StudentsDetailsComponent},
  ]},
  
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
