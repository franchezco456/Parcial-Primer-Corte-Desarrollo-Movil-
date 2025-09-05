import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Http {
  constructor(public http: HttpClient){}

  get<T>(url:string):Promise<T>{
    return new Promise((solve, reject)=>{
      this.http.get<T>(url).subscribe({
        next: (info) => solve(info),
        error: (err) => reject(err)
      });
    });
  }
}
