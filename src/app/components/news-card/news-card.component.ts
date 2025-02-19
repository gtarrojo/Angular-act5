import { Component, input } from '@angular/core';
import { IArticle } from '../../interfaces/iarticle.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  newsArticle = input<IArticle>({
    title: '',
    image: ' ',
    text: '',
    date: new Date(),
  });
}
