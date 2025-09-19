import { Injectable, signal } from '@angular/core';
import { ProductDto } from '../dto/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  ProductsArray = signal<ProductDto[]>([
    {
      id: '1',
      name: 'Adilette Slide Sandal Colorful',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/image.jpg',
      price: 300,
      quantity: 1,
      fav: false
    },
    {
      id: '2',
      name: 'Adilette Slide Sandal Colorful',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/image2.jpeg',
      price: 100,
      quantity: 1,
      fav: false
    },
    {
      id: '3',
      name: 'Adilette Colorful',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/newimage.jpg',
      price: 800,
      quantity: 1,
      fav: false
    },
    {
      id: '4',
      name: 'Adilette Slide Sandal Colorful',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/images.jpeg',
      price: 0,
      quantity: 1,
      fav: false
    },
    {
      id: '5',
      name: 'Adilette Slide Colorful',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/image1.png',
      price: 400,
      quantity: 1,
      fav: false
    },
    {
      id: '6',
      name: 'Adilette Colorful',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/image1.png',
      price: 300,
      quantity: 1,
      fav: false
    },
    {
      id: '7',
      name: 'Adilette Slide',
      description: 'Adilette Slide Sandal Colorful',
      image: 'assets/img/image1.png',
      price: 200,
      quantity: 1,
      fav: false
    },
  ])

  getProduct() {
    return this.ProductsArray();
  }

  toggleLike(likedItem: ProductDto) {
    this.ProductsArray().map((item) => {
      if (item.id == likedItem.id) {
        item.fav = !item.fav
      }
    })
    console.log(this.ProductsArray())
  }

  GetProductById(id: string | null) {
    return this.ProductsArray().find((item) => item.id === id);
  }
}