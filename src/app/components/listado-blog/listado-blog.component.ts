import { Component, Input } from '@angular/core';
import { IArticle } from '../../interfaces/iarticle.interface';

@Component({
  selector: 'app-listado-blog',
  imports: [],
  templateUrl: './listado-blog.component.html',
  styleUrl: './listado-blog.component.css',
})
export class ListadoBlogComponent {
  @Input() newsList: IArticle[] = [];
}
