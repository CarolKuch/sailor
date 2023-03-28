import { Component } from '@angular/core';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarker = faMapMarker
}
