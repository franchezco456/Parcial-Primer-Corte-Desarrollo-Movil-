import { Component } from '@angular/core';
import { Http } from 'src/app/core/providers/http/http';
import { environment } from 'src/environments/environment';
import { IArticle, INews } from '../interfaces/INews';
import { IData } from '../interfaces/IData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public articles: IArticle[] = [];
  public categories: IData<string>[] = [];
  private url = environment.newsapi.baseUrl;
  constructor(private http:Http) {
    this.categories.push({
      id: 'business',
      value: 'Business'
    }, {
      id: 'health',
      value: 'Health'
    }, {
      id: 'science',
      value: 'Science'
    }, {
      id: 'sports',
      value: 'Sports'
    });
    this.getNews();
  }

  public async getNews(){
    const news: INews = await this.http.getNews(this.url);
    this.articles= news.articles;
	  console.log(this.articles);
    }

  public async filter(category: string) {
    const news: INews = await this.http.getNews(this.url, category.toLowerCase());
    this.articles= news.articles;
  }
}

