<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg 3 g-4 ">
    <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import { mapGetters } from 'vuex'
export default {
 computed: {
  ...mapGetters(['products'])
 },
 components:{
  ProductCard
 }

}
</script>

<style>

</style>