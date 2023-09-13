<template>
  <div class="product">
    <div>
      <img :src="product.image" :alt="product.name">
      <h3>{{ product.name }}</h3>
    </div>
    <button class="product__button" @click="addToCart(product)">+ Add To Cart</button>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart.js';

export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore();
      const existingProduct = cartStore.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        cartStore.updateQuantity(existingProduct, existingProduct.quantity + 1);
      } else {
        cartStore.addToCart({
          ...product,
          quantity: 1,
        });
      }

      console.log('Product added to cart:', product);
    },
  },
};
</script>
