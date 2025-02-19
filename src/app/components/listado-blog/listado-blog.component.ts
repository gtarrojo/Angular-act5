import { Component, Input } from '@angular/core';
import { IArticle } from '../../interfaces/iarticle.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-blog',
  imports: [CommonModule],
  templateUrl: './listado-blog.component.html',
  styleUrl: './listado-blog.component.css',
})
export class ListadoBlogComponent {
  @Input() newsList: IArticle[] = [];
}
