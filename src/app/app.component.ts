import { Component } from '@angular/core';

import { FormularioBlogComponent } from './components/formulario-blog/formulario-blog.component';
import { ListadoBlogComponent } from './components/listado-blog/listado-blog.component';

@Component({
  selector: 'app-root',
  imports: [FormularioBlogComponent, ListadoBlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
