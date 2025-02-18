import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
        Validators.minLength(1),
        Validators.maxLength(200),
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

  addNews() {
    console.log(this.newsForm.value);
  }
}
