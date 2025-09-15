import { Component } from '@angular/core';
import { HeroComponent } from '../outlet/hero/hero.component';

@Component({
  selector: 'app-about',
  imports: [HeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
