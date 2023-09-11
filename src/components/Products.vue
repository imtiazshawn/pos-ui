<template>
    <!-- Products Nav -->
    <div class="products__nav">
        <div class="products__nav-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#888888" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/></svg>
            <span class="paragraph-text">Search/Barcode Scan</span>
        </div>
        <div class="products__nav-right">
            <select class="products__nav-option">
                <option>View All</option>
                <option>Single</option>
            </select>
        </div>
    </div>

    <!-- Products Body -->
    <div class="products__body">
        <Product v-for="product in products" :key="product.id" :product="product" />
    </div>

    <!-- Products Footer -->
    <div class="products__footer">
        <div class="products__footer-div">
            <h2 class="products__footer-amount">$250.00</h2>
            <span class="products__footer-date">
                2023-06-03
            </span>
            <svg class="products__footer-message" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16v12Z"/>
            </svg>
        </div>
    </div>
</template>


<script>
import Product from './Product.vue'
import productsData from '../api/products.json';

export default {
    components: {
        Product,
    },
    data() {
        return {
        products: productsData,
        };
    },
    props: {
        product: Object,
    },
    methods: {
        addToCart(product) {
        console.log('Product added to cart:', product);
        },
    },
};
</script>
