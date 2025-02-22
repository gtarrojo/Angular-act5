import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/iarticle.interface';
import { NEWS } from '../db/news.db';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private arrayNews: IArticle[] = NEWS;

  getAllNews(): IArticle[] {
    return this.arrayNews;
  }

  addNews(article: IArticle): void {
    // deberiamos tener en cuenta si el articulo es un duplicado
    this.arrayNews.unshift(article);
  }

  deleteNews(index: number): void {
    this.arrayNews.splice(index, 1);
  }
}
