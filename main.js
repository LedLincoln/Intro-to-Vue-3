const app = Vue.createApp({
    data() {
        return {
            cart:0,
            selectedVariant: 0,
            product: 'Socks',
            brand: 'Lincoln Looms',
            onSale: true,
            ximage: './assets/images/socks_blue.jpg',
            xinStock: false,
            details: ['50% cotton', '30% wool', '20% polyester', '10% hog bristle'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
              { id: 2236, color: 'orange', image: './assets/images/socks_orange.jpg', quantity: 1 }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if(this.cart > 0) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        msg() {
            if(this.onSale) {
                return this.product + " is on sale!"
            } else {
                return this.product + " is overpriced!"
            }
        }
    }
})
