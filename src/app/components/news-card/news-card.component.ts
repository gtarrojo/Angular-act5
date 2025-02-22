import { Component, input, inject, Input } from '@angular/core';
import { IArticle } from '../../interfaces/iarticle.interface';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import Swal from 'sweetalert2';

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
  @Input() index!: number;

  newsServices = inject(NewsService);

  deleteArticle() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la noticia de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: ' #3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.newsServices.deleteNews(this.index);
        Swal.fire('Noticia eliminada', '', 'success');
      }
    });
  }
}
