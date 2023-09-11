<template>
    <div class="cart__details">
        <div>
            <!-- Cart Nav -->
            <div class="cart__details-nav">
                <ul>
                    <li>Quantity</li>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Subtotal</li>
                </ul>
            </div>

            <!-- Cart Product -->
            <div class="cartedProduct">
                <CartedProduct v-for="product in cart" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cart.js';
import CartedProduct from './CartedProduct.vue';

export default {
    computed: {
        cart() {
            const cartStore = useCartStore();
            return cartStore.cart;
        },
    },
    created() {
      const cartStore = useCartStore();
      if (cartStore.cart.length === 0) {
        cartStore.loadCartData();
      }
    },
    components: { CartedProduct }
};
</script>
