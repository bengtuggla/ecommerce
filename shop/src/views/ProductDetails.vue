<template>
  <div>
    <div v-if="product" class="container my-5 py-5">
     <section class="text-center">
        <h3 class="mb-5 font-weight-bold">Product Details</h3>
        <div class="row">
           <div class="col-lg-6">
            <img :src="product.image" alt="product image" class="img-fluid">
           </div>
           <div class="col-lg-6 text-center text-lg-start">
            <h2 class="text-center font-weight-bold my-5">{{product.name}}</h2>
            
             <div class="mb-4">
              <h5>Description</h5>
              <p>{{product.desc}}</p>
             </div>
             <div>
              <h3 class="text-danger">{{product.price}}<span> SEK</span></h3>
              <button class="btn btn-primary">Add to cart</button>
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
props: ['id'],
computed:{
 ...mapGetters(['product'])
},
methods: {
 ...mapActions(['getOneProduct', 'cleanup'])
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