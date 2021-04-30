<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
    
  }
}
</script>

<style>

</style>
