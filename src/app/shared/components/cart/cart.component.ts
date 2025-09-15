import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { CartCountStore } from '../../../store/cart.store';
import { ProductDto } from '../../dto/product.dto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [ButtonComponent, RouterLink,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartStore = inject(CartCountStore)

  addMoreItems(item: ProductDto,sign:string) {
    this.cartStore.updateQuantity(item,sign);
  }

  removeItems(item: ProductDto) {
    this.cartStore.removeFromCart(item.id)
  }
}
