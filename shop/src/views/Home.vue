<template>

  <div>
<!-- Carousel wrapper -->
<div
  id="carouselBasicExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active ">
      <img
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        class="d-block w-100 "
        alt="..."
      />
      
      <div class="carousel-caption d-block w-60 ">
         <router-link class="nav-link active text-white" aria-current="page" to="/products">
        <h2 class="bg-dark w-50">NITROX DIVESHOP</h2>
        <p class="bg-light text-dark w-50">FIND YOUR QUALITY EQUIPMENT HERE</p></router-link>
       <!--  <div class="d-flex justify-content-center"><button class="btn btn-primary">PRODUCTS</button></div> -->
      </div>
    </div>
    
    <!-- Single item -->
    <div class="carousel-item">
      <img
        src="https://images.pexels.com/photos/6961668/pexels-photo-6961668.jpeg?cs=srgb&dl=pexels-daniel-torobekov-6961668.jpg&fm=jpg"
        class="d-block w-100"
        alt="..."
      />
       <div class="carousel-caption d-block ">
        <h2 class="bg-dark w-50">NITROX DIVESHOP</h2>
        <p class="bg-light text-dark w-50">FIND YOUR QUALITY EQUIPMENT HERE</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1603370671351-ce85bc0ec91e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-block ">
        <h2 class="bg-dark w-50">NITROX DIVESHOP</h2>
        <p class="bg-light text-dark w-50">FIND YOUR QUALITY EQUIPMENT HERE</p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- Carousel wrapper -->
  </div>
  
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
body{
  background: #1266f1;
}
.container{
  margin-top: 0 !important;
}
.carousel-caption{
  top: 10%;
  left: 5%;
  transform: translateY(-50%);
  bottom: initial;
}
</style>
