import { defineStore } from 'pinia'

const CART_KEY = 'cartData'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product)
      this.saveCartData()
    },
    removeFromCart(product) {
      const index = this.cart.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        this.cart.splice(index, 1)
        this.saveCartData()
      }
    },
    saveCartData() {
      localStorage.setItem(CART_KEY, JSON.stringify(this.cart))
    },
    loadCartData() {
      const cartData = localStorage.getItem(CART_KEY)
      if (cartData) {
        this.cart = JSON.parse(cartData)
      }
    }
  }
})