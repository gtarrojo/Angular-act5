import { Component, inject } from '@angular/core';
import { FormularioBlogComponent } from './components/formulario-blog/formulario-blog.component';
import { IArticle } from './interfaces/iarticle.interface';
import { NewsService } from './services/news.service';
import { ListadoBlogComponent } from './components/listado-blog/listado-blog.component';

@Component({
  selector: 'app-root',
  imports: [FormularioBlogComponent, ListadoBlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // tengo que cambiar el input por el signal y añadir un componente en el for para cada articulo
  // Despues en principio trabajar a full en el diseño y posibles mejores de funcionalidad
  newsData = inject(NewsService);
  newsArray: IArticle[] = [];

  ngOnInit() {
    this.newsArray = this.newsData.getAllNews();
  }
}
