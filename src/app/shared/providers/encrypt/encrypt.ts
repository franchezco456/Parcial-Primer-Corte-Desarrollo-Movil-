import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Encrypt {
  

  encode(text:string){
    return btoa(text);
  }

  decode(text:string){
    return atob(text);
  }
}
