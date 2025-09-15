import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from '../../dto/product.dto';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LikeStore } from '../../../store/like.store';
import { CartCountStore } from '../../../store/cart.store'
import { ProductService } from '../../services/product.service';
import { ButtonComponent } from '../../../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-product-detail',
  imports: [FontAwesomeModule, ButtonComponent, NgxImageZoomModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  constructor(private router: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.loadProduct()
  }
  faHeart = faHeartRegular
  faHeartSolid = faHeartSolid
  socialIcon = {
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    instagram: faInstagram
  }
  cartStore = inject(CartCountStore)
  likeStore = inject(LikeStore)
  Product = signal<ProductDto | undefined>(undefined);

  setToLocal() {
    if (this.Product()) {
      localStorage.setItem('product', JSON.stringify(this.Product()));
    }
  }

  getToLocal() {
    let product = JSON.parse(localStorage.getItem('product') || '[]')
    return product
  }

  loadProduct() {
    let product = this.getToLocal();
    if (product && product.id) this.Product.set(product);
    else this.findProduct()
  }

  findProduct() {
    let id = this.router.snapshot.paramMap.get('id')
    let ProductDetail = this.productService.GetProductById(id);
    this.Product.set(ProductDetail)
    this.setToLocal()
  }
  getProduct() {
    let ProductDetail = this.getToLocal();
    this.Product.set(ProductDetail)
  }
  IncreaseQuantity(item: ProductDto | undefined) {
    if (item) item.quantity++;
  }
  DecrementQuantity(item: ProductDto | undefined) {
    if (item && item.quantity > 1) item.quantity--;
  }
  addToCart(item: ProductDto | undefined) {
    this.cartStore.addToCart(item!);
  }
  toggleLike() {
    this.Product.update(item => item ? { ...item, fav: !item.fav } : item)
    this.likeStore.toggleLike(this.Product())
    this.setToLocal()
  }

  ngOnDestroy() {
    this.Product.set(undefined)
  }
}
