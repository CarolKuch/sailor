import { Component } from '@angular/core';
import { messageForm } from 'src/app/models/messageForm';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  messageContent = '';
  senderEmail = '';

  model = new messageForm(this.senderEmail, this.messageContent);

  submitted = false;

  onSubmit() { this.submitted = true; console.log(this.model.senderEmail + this.model.messageContent) }

}
