<template>
    <section class="container">
        <BasketList/>
    </section>
</template>

<script>
    import BasketList from "../components/BasketList";

    export default {
        components: { BasketList },
        head () {
            return {
                title: 'Cart',
            }
        },
    }
</script>

