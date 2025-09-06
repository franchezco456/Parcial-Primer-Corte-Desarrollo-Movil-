import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IArticle, INews } from 'src/app/pages/interfaces/INews';
import { ICountry } from 'src/app/pages/interfaces/Icountries';

@Injectable({
  providedIn: 'root'
})
export class Http {

	

  constructor(public http: HttpClient){}

  async getNews(url:string, category: string = 'general'): Promise<INews>{
    try {
      return (await lastValueFrom(
        this.http.get<INews>(`${url}/v2/top-headlines`, {
          params: {
            pageSize: 100,
            sortBy: 'publishedAt',
            category: category
          },
        })
      ));
    } catch (e: any) {
      throw e as HttpErrorResponse;
    }
  }

  async getcountries(url:string): Promise<ICountry>{
    try {
      return (await lastValueFrom(
        this.http.get<ICountry>(`${url}`)
      ));
    } catch (e: any) {
      throw e as HttpErrorResponse;
    }
  }
}
