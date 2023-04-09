import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {

  form: FormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]],
    message: ['', [
      Validators.required,
      Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) { }

  //TEMPORARY - object is to be sent to API
  submit() {
    if (this.form.valid) {
      return this.form.value;
    }
  }
}
