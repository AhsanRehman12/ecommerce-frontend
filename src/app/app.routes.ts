import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { LikeComponent } from './like/like.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'my-cart', component: CartComponent },
  {path:'wishlist',component:LikeComponent},
  { path: '**', component: NotFoundComponent }
];
