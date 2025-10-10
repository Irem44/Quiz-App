import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestions',
  imports: [ReactiveFormsModule],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss',
})
export class SuggestionsComponent {
  frm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.frm = formbuilder.group({
      name: [''],
      surname: [''],
      email: [''],
    });
  }

  onSubmit(data) {
    console.log(data);
  }
  send() {
    alert('Form sent!');
  }
}
