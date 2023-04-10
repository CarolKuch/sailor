import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {

  submitted = false;

  form: FormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.minLength(3),
      Validators.maxLength(255)]
    ],
    title: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)]],
    message: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(300)],],
  });

  constructor(private fb: FormBuilder) { }

  //TEMPORARY - object is to be sent to API
  submit() {
    this.form.value.title = this.form.value.title.trim();
    this.form.value.message = this.form.value.message.trim();

    console.log(this.form.value.email + this.form.value.title + this.form.value.message);
    if (this.form.valid) {
      this.submitted = true;
      console.log("TRUE" + this.form.value.email + this.form.value.title + this.form.value.message);
      return this.form.value;
    }
  }
}

