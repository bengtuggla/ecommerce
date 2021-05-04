<template>
  <footer class="bg-primary text-center py-2 container-fluid">
 <div class="text-white p-4">
&copy; {{new Date().getFullYear()}}Copyright
<a href="#" class="text-white">NITROXSHOP.COM</a>
<span class="small ms-4">
 <router-link class="text-white mx-2" to="/About">About</router-link>
 <router-link class="text-white mx-2" to="/integrity">Integrity Agreement</router-link>
</span>
 </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>