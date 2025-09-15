import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './outlet/header/header.component';
import { FooterComponent } from './outlet/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecommerce-frontend';
  ngOnInit(): void {
    initFlowbite()
  } 
}
