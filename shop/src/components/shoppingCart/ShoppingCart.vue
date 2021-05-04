<template>
  <div>
   <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />

     <div v-if="shoppingCart.length < 1">
       <div class="my-3" >
        Din kundvagn är tom
       </div>
       <div class="dropdown-divider" ></div>
     </div>
    <div class="dropdown-divider" ></div>
   <div class="p-2 d-flex justify-content-between align-items-center">
     <div class="total-price p-2 m-2">
      <h6>Totalt:</h6> <span> {{shoppingCartTotal}} SEK </span>
      <small class="text-muted">inkl. moms</small>
      </div> 
      
      <div>
       <button class="btn btn-primary me-4">Gå till kassan</button>
      </div>
   </div>
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
 name: 'ShoppingCart',
 components:{
  ShoppingCartProduct
 },
 computed:{
  ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
 }

}
</script>

<style scoped>
.total-price{
 border: 1px solid red;
 background: rgba(250, 255, 187, 0.589);
 border-radius: 5px;

}
</style>