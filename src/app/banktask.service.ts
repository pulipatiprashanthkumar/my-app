import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanktaskService {

  constructor(private _httpClient:HttpClient) { }

  getBanktasks():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");

  }

  
  getBanktask(id:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);

  }

  getPagedBanktasks(page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);

  }

  getFilteredBanktasks(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);

  }

  
  getSortedBanktasks(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }

  deleteBanktasks(id:string):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }
  
  createBanktask(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',data);
  }

}