<template>
  <section class="container">
    <ProductList/>
  </section>
</template>

<script>
  import ProductList from "../components/ProductList";

export default {
  components: { ProductList },
  head () {
    return {
      title: 'Internet Shop',
    }
  },
}
</script>

<style scoped lang="sass">
  .container

    padding: 0
    width: 100%
    background-color: lavender
</style>
