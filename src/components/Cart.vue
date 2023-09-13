<template>
    <!-- Cart Nav -->
    <div class="cart__nav">
        <div class="cart__nav-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>
            <span class="paragraph-text">Walking Customer (170000000)</span>
        </div>
        <div class="cart__nav-right">
            <div class="nav-right-item01">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 23.7q-.825 0-1.413-.587T3 21.7v-14q0-.825.588-1.413T5 5.7h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .825-.588 1.413T19 23.7H5Zm7-9Zm4.175-8.425l1.425 1.4l-6.6 6.6V15.7h1.4l6.625-6.625l1.425 1.4l-7.2 7.225H9v-4.25l7.175-7.175Zm4.275 4.2l-4.275-4.2l2.5-2.5q.6-.6 1.438-.6t1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8l-2.475 2.475Z"/></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 23V1h14v22H5Zm2-3v1h10v-1H7Zm0-2h10V6H7v12ZM7 4h10V3H7v1Zm0 0V3v1Zm0 16v1v-1Z"/></svg>
                </div>
            </div>
            <div class="nav-right-item02">
                <span class="item02-01">DUE</span>
                <span class="item02-02">0.00</span>
            </div>
            <div class="nav-right-item03">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/></svg>
            </div>
        </div>
    </div>

    <!-- Cart Body -->
    <div class="cart__body">
        <CartDetails />
    </div>

    <!-- Cart Footer -->
    <div class="cart__footer">
        <div class="cart__details-footer">
            <div class="cartDetails__footer-topbar">
                <ul>
                    <li>TOTAL ITEMS</li>
                    <li>{{ cartItemCount }}</li>
                    <li>TOTAL</li>
                    <li>{{ subtotal }}</li>
                </ul>
            </div>
            <div class="cartDetails__footer-discount">
                <li>DISCOUNT</li>
                <div>0</div>
                <li>TAX AMOUNT (%)</li>
                <div>0</div>
            </div>
            <div class="cartDetails__footer-shipping">
                <li>DISCOUNT</li>
                <div>0</div>
                <li>TAX AMOUNT (%)</li>
                <div>0</div>
            </div>
            <div class="cartDetails__footer-bottombar">
                <ul>
                    <li></li>
                    <li></li>
                    <li>TOTAL</li>
                    <li>100.00</li>
                </ul>
            </div>
        </div>
        <div class="cart__footer-div">
            <div class="cart__footer-left">
                <div class="cart__footer-left-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                    <h3 class="cart__footer-boxText">PAY NOW</h3>
                </div>
            </div>
            <div class="cart__footer-right">
                <div class="cart__footer-left-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 576 512"><path fill="#ffffff" d="M312 24v10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3.5-.7 1.2-.7 2.8v.6c.2.2.9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9.3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24v-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6.9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6.9-1.8.8-4.1v-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zm256.2 312.3c13.1 17.8 9.3 42.8-8.5 55.9l-126.6 93.3c-23.4 17.2-51.6 26.5-80.7 26.5H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h36.8l44.9-36c22.7-18.2 50.9-28 80-28H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h120.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384h-.9h.9z"/></svg>
                    <h3 class="cart__footer-boxText">HOLD</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartDetails from './CartDetails.vue';
import { useCartStore } from '@/stores/cart';

export default {
  components: {
    CartDetails,
  },
  computed: {
    cartData() {
      const cartStore = useCartStore();
      return cartStore.cart;
    },
    cartItemCount() {
      const cartStore = useCartStore();
      return cartStore.cart.length;
    },

    subtotal() {
      const cartStore = useCartStore();
      return cartStore.subtotal;
    },
  },
};
</script>