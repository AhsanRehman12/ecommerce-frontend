import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeroComponent } from '../outlet/hero/hero.component';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-home',
  imports: [ProductComponent,HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public productService:ProductService){}
}