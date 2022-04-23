<template>
  <div id="app">

    <!-- Conteiner -->
    <div class="conteiner">

      <!-- Left Column -->
      <div class="izq vh-100">

        <!-- Logo -->
        <div class="logo">
          <a href="https://www.wobiz.com/">
            <img src="./assets/img/logo.svg" alt="">
          </a>
        </div>
        <!-- End Logo -->

        <status-login v-if="ingresa" class="font"></status-login>

        <status-sign-in v-else class="font"></status-sign-in>

      </div>
      <!-- End Left Column -->

      <!-- Right Column -->
      <div class="der vh-100 position-relative">
          <div class="change-status">
            <div class="quest-login" v-text="msg"></div>
            <button @click="changeStatus()" class="btn btn-outline-light button-text">
              <div v-text="textButton"> </div>
            </button>
          </div>
      </div>
      <!-- End Right Column -->

    </div>
    <!-- End Conteiner -->

  </div>
</template>

<script>
import statusLogin from './assets/components/IngresaCuenta'
import statusSignIn from './assets/components/RegistraCuenta.vue'

export default {
  name: 'app',
  data () {
    return {
      ingresa: true,
      msg: '¿No tienes una cuenta de bowiz?',
      textButton: 'Crea una cuenta'
    }
  },
  components: {
    'status-login': statusLogin,
    'status-sign-in': statusSignIn
  },
  methods: {
    changeStatus () {
      if (this.ingresa) {
        this.ingresa = false
        this.msg = '¿Ya tienes una cuenta de Bowiz?'
        this.textButton = 'Ingresa'
      } else {
        this.ingresa = true
        this.msg = '¿No tienes una cuenta de Bowiz?'
        this.textButton = 'Crea una cuenta'
      }
    }
  }
}
</script>

<style>
body{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
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
.izq .logo,
.font{
  padding: 0 15px;
}
.izq .logo a img{
  width: 180px;
}
.change-status{
  padding-top: 42px;
  position: absolute;
  right: 10%;
  display: flex;
}
.change-status .quest-login{
  margin: 6.5px 13px 13px 0;
  color: white;
}
.greenish-blue-text{
  color: #163a49;
}
.bolder{
  font-weight: 700;
  font-size: 26px;
}
.bold{
  font-weight: 500;
}
.input-style{
  font-size: 16px;
  height: calc(1.5em + 0.75rem + 16px)!important;
}
.form-control{
  margin-bottom: 1rem;
}
.link-decoration{
  text-decoration: underline!important;;
}
.forgot-pass{
  font-size: 14px!important;
}
.gray-text{
  color: #969696;
}
.btn-validate{
  margin-top: 15px;
  height: 45px!important;
  text-transform: none!important;
  font-weight: 700!important;
  width: 100%;
  background-color: #1bb8e3;
  border-color: #1bb8e3;
}
.button-text{
  font-weight: 700;
}
</style>
