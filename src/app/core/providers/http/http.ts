import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Http {

	private readonly url = environment.newsapi.baseUrl;

  constructor(public http: HttpClient){}

  async get() {
    try {
      return (await lastValueFrom(
        this.http.get(`${this.url}/v2/top-headlines`, {
          observe: 'response',
          params: {
            pageSize: 100,
            sortBy: 'publishedAt',
            q: 'recent',
          },
        })
      ));
    } catch (e: any) {
      throw e as HttpErrorResponse;
    }
  }
}
