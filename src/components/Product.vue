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
      cartStore.addToCart(product);
      console.log('Product added to cart:', product);
    },
  },
};
</script>