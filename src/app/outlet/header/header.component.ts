import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, faCartShopping, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CartCountStore } from '../../store/cart.store';
import { LikeStore } from '../../store/like.store';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faBars = faBars
  faCross = faXmark
  faCart = faCartShopping
  faUser = faUser
  faHeart = faHeart
  faSearch = faSearch

  cartStore = inject(CartCountStore)
  likeStore = inject(LikeStore)


  sideBar = signal(false);

  toggleSideBar() {
    this.sideBar.update(value => !value)
  }
}
