<template>
    <li>
        {{product.title}}, цена: {{product.price}}
        <button @click="onDecrease(product.id)">-</button>
        <input type="text" :value="product.count" disabled>
        <button @click="onIncrease(product.id)">+</button>
        Всего: {{totalPrice}}
        <button @click="onRemove(product.id)">Убрать</button>
    </li>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "BasketListItem",
        props: {
            type: Object,
            required: true
        },
        computed: {
            totalPrice (){
                return this.product.price * this.product.count;
            }
        },
        methods: mapActions({
            onDecrease: 'Cart/DecreaseCount',
            onIncrease: 'Cart/IncreaseCount',
            onRemove: 'Cart/removeFromCart'
        })
    }
</script>

<style scoped>

</style>