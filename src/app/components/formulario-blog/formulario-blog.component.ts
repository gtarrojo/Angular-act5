import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-blog.component.html',
  styleUrl: './formulario-blog.component.css',
})
export class FormularioBlogComponent {
  newsForm: FormGroup;

  constructor() {
    this.newsForm = new FormGroup(
      {
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
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
        date: new FormControl(null, [Validators.required]),
      },
      [] // añadir validador a nivel de formulario
    );
  }

  checkControl(controlName: string): boolean | undefined {
    return (
      this.newsForm.get(controlName)?.invalid &&
      (this.newsForm.get(controlName)?.touched ||
        this.newsForm.get('text')?.dirty)
    );
  }

  checkValid(controlName: string): boolean | undefined {
    return (
      this.newsForm.get(controlName)?.valid &&
      (this.newsForm.get(controlName)?.touched ||
        this.newsForm.get(controlName)?.dirty)
    );
  }

  checkCurrentError(
    controlName: string,
    errorName: string
  ): boolean | undefined {
    return (
      this.newsForm.get(controlName)?.hasError(errorName) &&
      this.newsForm.get(controlName)?.touched
    );
  }

  newsServices = inject(NewsService);
  // arreglar sweetalert
  sendNews() {
    const newArticle = this.newsForm.value;
    this.newsServices.addNews(newArticle);
    Swal.fire({
      position: 'center',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      width: '10rem',
      heightAuto: true,
    });

    this.newsForm.reset();
  }
}
