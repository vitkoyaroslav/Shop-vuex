<template>
    <li>
        <b-card bg-variant="light"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 text-left">
            <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image">{{product.img}}</b-img>
            <b-card-text class="text-xs-left font-weight-bold">
                Вид товара: {{ product.title }}
            </b-card-text class="text-xs-left">
            <b-card-text>
                Цена: {{product.price}} грн.
            </b-card-text>
            <b-button variant="primary" @click="onBuy(product)">Купить</b-button>
        </b-card>
    </li>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "ProductListItem",
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        methods: mapActions({
            onBuy: 'Cart/addToCart'
        })
    }
</script>

<style scoped lang="sass">
    li
       display: flex
       width: 300px
       height: 320px
       margin: 0 0 10px 0
</style>