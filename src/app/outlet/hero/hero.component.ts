import { Component, OnChanges, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    console.log('init')
    initFlowbite()
  }
}
