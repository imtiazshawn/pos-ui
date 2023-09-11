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
            <div class="cart__details-product">
                <div class="product__quantity">
                    <div class="product__quantity-upbar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="m17.5 15.914l-5.5-5.5l-5.5 5.5L5.086 14.5L12 7.586l6.914 6.914l-1.414 1.414Z"/></svg>
                    </div>
                    <div class="product__quantity-count">
                        <input type="number" />
                    </div>
                    <div class="product__quantity-downbar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                    </div>
                </div>

                <div class="product__name">
                    <div class="product__name-highliter">
                        <h3>Home Delivery</h3>
                    </div>
                </div>
                <div class="product__price">
                    <p>100.00</p>
                </div>
                <div class="product__subtotal">
                    <p>100.00</p>
                </div>
                <div class="product__remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="#dd4b39" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/></svg>
                </div>
            </div>
        </div>

        <div class="cart__details-footer">
            <div class="cartDetails__footer-topbar">
                <ul>
                    <li>TOTAL ITEMS</li>
                    <li>1 (1)</li>
                    <li>TOTAL</li>
                    <li>100.00</li>
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
                    <li>TOTAL ITEMS</li>
                    <li>1 (1)</li>
                    <li>TOTAL</li>
                    <li>100.00</li>
                </ul>
            </div>
        </div>
    </div>
</template>