import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public url:string = 'http://a.itying.com/'
  constructor(public http:HttpClient) {

  }
  get(api:string){
     return new Promise((resolve,reject)=>{
         this.http.get(this.url + api).subscribe((response)=>{
             resolve(response)
         })
     })
  }
}
