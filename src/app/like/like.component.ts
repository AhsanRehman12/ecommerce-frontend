import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { LikeStore } from '../store/like.store';
import { ProductDto } from '../shared/dto/product.dto';

@Component({
  selector: 'app-like',
  imports: [ProductComponent],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  likeStore = inject(LikeStore);
  likeProducts = signal<ProductDto[]>([])
  constructor() {
    this.likeProducts.set(this.likeStore.LikeProduct())
  }
}
