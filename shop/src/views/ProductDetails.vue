<template>
  <div>
    <div v-if="product" class="container my-5 py-5 text-white">
     <section class="text-center">
        <h3 class="mb-5 font-weight-bold">Product Details</h3>
        <div class="row">
           <div class="col-lg-6">
            
            <img :src="product.image" alt="product image" class="img-fluid rounded shadow-lg">
            <div><router-link class="nav-link active text-white" aria-current="page" to="/products">Product Page >></router-link></div>
           </div>
           <div class="col-lg-6 text-center text-lg-start">
            <h2 class="text-center font-weight-bold my-5">{{product.name}}</h2>
            
             <div class="mb-4">
              <h5>Description</h5>
              <p>{{product.desc}}</p>
             </div>
             <div>
              <h3 class="text-warning">{{product.price}}<span> SEK</span></h3>
              <button class="btn btn-warning text-dark" @click="addProductToCart({product, quantity})">Add to cart  <i class="fas fa-cart-plus"></i></button>
             </div>
            
           </div>
        </div>
     </section>
    </div>
    <!-- Spinner -->
    <div v-else>LOADING PRODUCT...</div>

    <!-- end spinner -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

name: 'ProductDetails',
data(){
 return {
  quantity: 1
 }
},

props: ['id'],
computed:{
 ...mapGetters(['product'])
},
methods: {
 ...mapActions(['getOneProduct', 'cleanup',
 'addProductToCart'])
},
created(){
 this.getOneProduct(this.id)
},
destroyed(){
 this.cleanup()
}
}
</script>

<style scoped>
span{
 color: black;
}



</style>