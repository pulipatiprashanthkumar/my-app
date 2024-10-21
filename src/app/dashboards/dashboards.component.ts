import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent {
constructor(private _router:Router){}
  logout(){
    // remove
    sessionStorage.removeItem('token');
    // go to login page
    this._router.navigateByUrl('/login')
  }

}
