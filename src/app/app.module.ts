import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {HttpClientModule } from '@angular/common/http';
import { BanktaskComponent } from './banktask/banktask.component';
import { FlipkartAPIComponent } from './flipkart-api/flipkart-api.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBanktaskComponent } from './create-banktask/create-banktask.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BanktaskDetailsComponent } from './banktask-details/banktask-details.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,

    DiceComponent,
     DirectivesComponent,
     PipesComponent,
     TasksComponent,
     PreFlipkartComponent,
     HigherOrderComponent,
     AmazonComponent,
     Flipkarttask4Component,
     VehicleComponent,
     BanktaskComponent,
     FlipkartAPIComponent,
     MailComponent,
     CreateVehicleComponent,
     CreateBanktaskComponent,
     StudentsComponent,
     CreateUserComponent,
     StudentProgressComponent,
     VehicleDetailsComponent,
     BanktaskDetailsComponent,
     StudentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
