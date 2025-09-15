import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals"
import { ProductDto } from "../shared/dto/product.dto"
import { computed, effect } from "@angular/core"


type likeState = {
  LikeProduct: {
    id: string,
    name: string,
    description: string
    image: string
    price: number
    quantity: number
    fav: boolean
  }[]
}

const initialState: likeState = {
  LikeProduct: []
}

export const LikeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(state => ({
    likeArrayLength:computed(()=> state.LikeProduct().length)
  })),
  withMethods(state => ({
    toggleLike(likedItem: ProductDto | undefined) {
      const findItem = state.LikeProduct().find((item) => item.id == likedItem?.id)
      if (findItem) {
        findItem.fav = false;
        console.log(findItem, state.LikeProduct())
        patchState(state, {
          LikeProduct: state.LikeProduct().filter((item) => item.fav == true)
        })
      } else {
        patchState(state, { LikeProduct: [{ ...likedItem!, fav: true }, ...state.LikeProduct()] })
      }
      console.log(state.LikeProduct())
    },
    resetLike() {
      patchState(state, { LikeProduct: [] })
    }
  })),
  withHooks({
    onInit(store) {
      const parsedState = JSON.parse(localStorage.getItem('likedItems') ?? '[]')
      if (parsedState) {
        patchState(store, {
          LikeProduct: parsedState
        })
      }
      effect(() => {
        const state = getState(store);
        const likedItems = store.LikeProduct().filter((item) => item.fav === true)
        localStorage.setItem('likedItems', JSON.stringify(likedItems))
      })
    }
  })
)