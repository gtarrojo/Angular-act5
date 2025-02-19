import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-formulario-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-blog.component.html',
  styleUrl: './formulario-blog.component.css',
})
export class FormularioBlogComponent {
  newsForm: FormGroup;

  constructor() {
    this.newsForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/
        ),
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      date: new FormControl('', [Validators.required]),
    });
  }

  newsData = inject(NewsService);

  addNews() {
    const newArticle = this.newsForm.value;
    this.newsData.addNews(newArticle);
    this.newsForm.reset();
  }
}
