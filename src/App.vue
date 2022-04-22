<template>
  <div id="app">

    <!-- Conteiner -->
    <div class="conteiner">

      <!-- Left Column -->
      <div class="izq vh-100">

        <!-- Logo -->
        <div class="logo">
          <a href="">
            <img src="./assets/img/logo.svg" alt="">
          </a>
        </div>
        <!-- End Logo -->

        <form>

        </form>

      </div>
      <!-- End Left Column -->

      <!-- Right Column -->
      <div class="der vh-100 position-relative">

      </div>
      <!-- End Right Column -->

    </div>
    <!-- End Conteiner -->

  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      
    };
  }
};
</script>

<style>
.conteiner{
  display: grid;
  grid-template-columns: 33.33% 66.66%;
}
.der{
  background: url(./assets/img/loginImage.png) no-repeat center center/cover;
  width: 100%;
}
.position-relative{
  position: relative!important;
}
.izq{
  padding: 50px 30px;
}
.izq .logo a img{
  width: 180px;
}
</style>
