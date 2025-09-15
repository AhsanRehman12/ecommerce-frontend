import { Component, inject, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { ProductDto } from '../shared/dto/product.dto';
import { ProductService } from '../shared/services/product.service';
import { Router } from '@angular/router';
import { CartCountStore } from '../store/cart.store'
import { LikeStore } from '../store/like.store';

@Component({
  selector: 'app-product',
  imports: [FontAwesomeModule, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() productData!: ProductDto[];
  faHeart = faHeartRegular
  faHeartSolid = faHeartSolid

  cartStore = inject(CartCountStore)
  likeStore = inject(LikeStore)

  constructor(private productService: ProductService,
    private router: Router
  ) {
  }
  ngOnInit() {
    console.log('inside product ', this.productData)
  }
  likeProduct(item: ProductDto) {
    this.productService.toggleLike(item)
    this.likeStore.toggleLike(item)
  }

  ShowProductDetail(id: string) {
    this.router.navigateByUrl(`/product/${id}`)
  }
}
