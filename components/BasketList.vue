<template>
    <ul v-if="totalPrice > 0">
        <BasketListItem v-for="product of products" :key="product.id" :product="product"/>
        Общая стоимость покупки: {{totalPrice}}
    </ul>
    <div v-else>
        <h3 class="text-center mt-3">Пустая карта</h3>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import BasketListItem from "./BasketListItem";
    export default {
        name: "BasketList",
        components: { BasketListItem },
        computed: mapGetters ({
            products: 'Cart/productsList',
            totalPrice: 'Cart/totalCartPrice'
        })
    }
</script>

<style scoped>

</style>