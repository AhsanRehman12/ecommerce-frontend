import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot,faPhone,faMessage  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fafacebook = faFacebook
  faWhatsapp = faWhatsapp
  faInstagram = faInstagram
  faPhone = faPhone
  faMessage = faMessage
  falocation = faLocationDot 
}
