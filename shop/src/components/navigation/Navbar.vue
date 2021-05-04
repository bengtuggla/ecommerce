<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-4">
    <div class="container">
      <router-link class="navbar-brand" to="/"><img src="../../assets/nitroxlogo2.png" alt="Logo"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
              <!-- Dropdown -->
         <li class="nav-item dropdown">
           <a
             class="nav-link"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
           >
             <i class="fas fa-shopping-cart"></i>
              <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{cartItemCount}}</span>
           </a>
           <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
             <!-- Shoppingcart -->
           <!--  <ul class="shopping-cart"> -->
              <ShoppingCart />
            <!-- </ul> -->
           </ul>
         </li>
         <li class="nav-item dropdown">
           <a
             class="nav-link"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
           >
             <i class="fas fa-user"></i>
           </a>
           <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            USER SETTINGS
           </ul>
         </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from '../shoppingCart/ShoppingCart'
export default {
  name: 'Navbar',
  components:{
    ShoppingCart
  },
  computed: {
    ...mapGetters(['cartItemCount'])
  }

}
</script>

<style scoped>
.shopping-cart{
  min-width: 480px;
  max-width: auto;
  border: 1px solid rgba(173, 169, 169, 0.623);
  border-radius: 5px;
  box-shadow: 3px 2px #88888844;
}

</style>