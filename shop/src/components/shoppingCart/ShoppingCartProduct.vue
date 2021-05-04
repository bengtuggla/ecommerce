<template>
  <div class="cart-item">
   
   <div class="p-2 d-flex justify-content-between align-items-center">

    <div class="d-flex align-items-center">
       <img :src="item.product.image" alt="" class="img-fluid image-width me-2">
       <div>
          <div><small><strong>{{item.product.name}}</strong></small></div>
          <div><small>{{item.quantity}} <span>st</span> x {{item.product.price}} <span>:-</span> </small></div>
       </div>
    </div>

    <div>
     <div class="btn btn-group btn-group-sm me-2" role="group">
      <button class="btn btn-dark"  @click.stop="addProductToCart({product, quantity})">+</button>
      <button v-if="item.quantity > 0" class="btn btn-dark"  @click.stop="subProductFromCart({product, quantity})">-</button>
      <button class="btn btn-danger btn-sm" @click.stop=""><i class="fas fa-trash"></i></button>
     </div> 
     
    </div>

   </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 data(){
  return{
   quantity: 1
  }
 },
 props: ['item'],
  methods: {
  ...mapActions(['subProductFromCart', 'addProductToCart'])
 
},
computed:{
 ...mapGetters(['product'])
}
  
}
</script>

<style>
.image-width{
 width: 50px;
}
</style>