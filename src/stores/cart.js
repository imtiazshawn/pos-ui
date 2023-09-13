import { defineStore } from 'pinia';

const CART_KEY = 'cartData';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    subtotal: 0,
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
      this.saveCartData();
      this.updateSubtotal();
    },
    removeFromCart(product) {
      const index = this.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.saveCartData();
        this.updateSubtotal();
      }
    },
    saveCartData() {
      localStorage.setItem(CART_KEY, JSON.stringify(this.cart));
    },
    loadCartData() {
      const cartData = localStorage.getItem(CART_KEY);
      if (cartData) {
        this.cart = JSON.parse(cartData);
        this.cart.forEach((product) => {
          if (!product.quantity) {
            product.quantity = 1;
          }
        });
        this.updateSubtotal();
      }
    },
    updateSubtotal() {
      let total = 0;
      for (const product of this.cart) {
        total += product.price * product.quantity;
      }
      this.subtotal = total.toFixed(2);
      console.log(this.subtotal);
    },
  },
});
