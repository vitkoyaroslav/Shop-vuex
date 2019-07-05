<template>
    <div class="header">
        <div class="header_content">
            <nuxt-link class="home_link" :to="{name: 'home'}">На основную страницу</nuxt-link>
            <SmallBasket/>
        </div>
    </div>
</template>

<script>
    import SmallBasket from "./SmallBasket";

    export default {
        name: "MainHeader",
        components: {SmallBasket}
    }
</script>

<style scoped lang="sass">
    .header
        display: flex
        justify-content: space-around
        border-bottom: 1px solid #41b883
        height: 40px
        background-color: #F5F5F5
        width: 100%
        min-width: 320px
        .header_content
            display: flex
            justify-content: space-between
            width: 70%
            .home_link
            margin: 6px 0 0 0
            cursor: pointer
</style>