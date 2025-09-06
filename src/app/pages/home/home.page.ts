import { Component } from '@angular/core';
import { Http } from 'src/app/core/providers/http/http';
import { environment } from 'src/environments/environment';
import { IArticle, INews } from '../interfaces/INews';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public articles: IArticle[] = [];
  private url = environment.newsapi.baseUrl;
  constructor(private http:Http) {
    this.getNews();
  }

  public async getNews(){
    const news: INews = await this.http.getNews(this.url);
    this.articles= news.articles;
	  console.log(this.articles);
    }
}

