const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            //this.cart += 1
            this.cart.push(id)
        }
    }
})
