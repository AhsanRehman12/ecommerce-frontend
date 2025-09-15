import { signalStore, withState, withMethods, patchState, withHooks, getState, withComputed } from '@ngrx/signals'
import { ProductDto } from '../shared/dto/product.dto'
import { computed, effect } from '@angular/core'

type CartState = {
  cartArray: {
    id: string,
    name: string,
    description: string
    image: string
    price: number
    quantity: number
    fav: boolean
  }[]
}

const initialState: CartState = {
  cartArray: [],
};

export const CartCountStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((state) => ({
    cartItemLength: computed(() => state.cartArray().length),
    itemsPrice: computed(() => state.cartArray().reduce((total, item) => total + (item.quantity * item.price), 0))
  })),
  withMethods(state => ({

    addToCart(cartItem: ProductDto) {
      let product = state.cartArray().find((item) => item.id == cartItem.id);
      if (product) {
        patchState((state), { cartArray: state.cartArray().map((item) => item.id == cartItem.id ? { ...item, quantity: item.quantity + 1 } : item) })
      } else patchState(state, { cartArray: [{ ...cartItem, quantity: cartItem.quantity }, ...state.cartArray()] })
    },

    updateQuantity(item: ProductDto, sign: string) {
      const updatedProduct = state.cartArray().map(p => {
        if (item.id == p.id) {
          let newQuantity = p.quantity;
          if (sign == '+') { newQuantity += 1; }
          else if (sign == '-' && p.quantity > 1) { newQuantity -= 1; }
          return { ...p, quantity: newQuantity }
        }
        return p
      });
      patchState(state, { cartArray: updatedProduct });
    },

    removeFromCart(id: string) {
      const findIndex = state.cartArray().findIndex((item) => item.id == id)
      state.cartArray().splice(findIndex, 1);
      patchState(state, { cartArray: [...state.cartArray()] })
    },

    resetCart() {
      patchState(state, { cartArray: [] })
    },
  })),

  withHooks({
    onInit(store) {
      const cartItemFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') ?? '[]')
      patchState(store, {
        cartArray: cartItemFromLocalStorage
      })
      effect(() => {
        const state = getState(store)
        localStorage.setItem('cartItems', JSON.stringify(state.cartArray))
      })
    }
  })
)
