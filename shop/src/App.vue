<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <router-view/>
  
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import AppFooter from './components/navigation/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
