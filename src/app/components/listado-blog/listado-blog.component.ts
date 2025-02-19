import { Component, Input } from '@angular/core';
import { IArticle } from '../../interfaces/iarticle.interface';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-listado-blog',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './listado-blog.component.html',
  styleUrl: './listado-blog.component.css',
})
export class ListadoBlogComponent {
  @Input() newsList: IArticle[] = [];
}
