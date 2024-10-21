import { Component } from '@angular/core';
import { BanktaskService } from '../banktask.service';

@Component({
  selector: 'app-banktask',
  templateUrl: './banktask.component.html',
  styleUrls: ['./banktask.component.css']
})
export class BanktaskComponent {

  banktasks: any = [];
  public page: number = 1;
  term: string = "";
  column: string = "";
  order: string = "";



  constructor(private _banktaskService: BanktaskService) {
    _banktaskService.getBanktasks().subscribe(
      (data: any) => {
        this.banktasks = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    )

  }

  pagination() {
    this._banktaskService.getPagedBanktasks(this.page).subscribe(
      (data: any) => {
        this.banktasks = data;
      },
      (err: any) => {
        alert(err.error);
      }

    )

  }

  search() {

    this._banktaskService.getFilteredBanktasks(this.term).subscribe(
      (data: any) => {
        this.banktasks = data;
      },
      (err: any) => {
        alert(err.error);
      }

    )

  }

  sort() {
    this._banktaskService.getSortedBanktasks(this.column, this.order).subscribe(
      (data: any) => {
        this.banktasks = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  delete(id:string){
    this._banktaskService.deleteBanktasks(id).subscribe(
      (data: any) => {
        alert('Deleted Successfully');
        location.reload();
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }






}


