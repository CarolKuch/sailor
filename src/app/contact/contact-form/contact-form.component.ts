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

  submit() {
    console.log(`Twoja wiadomość się tu pokazuje: ${this.form.value.message}`);
    if (this.form.valid) {
      console.log("Wysłano");
    }
  }
}
