<template>
<div>
 <h1 class="text-white text-center bold">PRODUCTS</h1>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 ">
    <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import { mapGetters } from 'vuex'
export default {
 name: 'ProductCardDeck',
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