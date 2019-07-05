<template>
    <ul>
        <ProductListItem v-for="product of products" :key="product.id" :product="product"/>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProductListItem from "./ProductListItem";

    export default {
        name: "ProductList",
        components: { ProductListItem },
        computed: mapGetters ({
            products: 'Products/products'
        })
    }
</script>

<style scoped lang="sass">
    ul
        padding: 30px
        display: flex
        justify-content: space-around
        flex-wrap: wrap
        width: 100%
        text-align: center
</style>