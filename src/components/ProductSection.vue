<template>
    <div class="products__section">
        <div class="products__section-left">
            <Products />
        </div>
        <div class="products__section-right">
            <Cart />
        </div>
    </div>
</template>

<script setup>
  import Cart from './Cart.vue';
  import Products from './Products.vue'
</script>