<template>
    <nuxt-link class="basket" :to="{name: 'cart'}">Корзина: ({{ count }})</nuxt-link>
</template>

<script>
    import { mapGetters } from 'vuex';


    export default {
        name: "SmallBasket",
        computed: mapGetters({
            count: 'Cart/productsCount'
        })
    }
</script>

<style scoped lang="sass">
    .basket
        cursor: pointer
</style>