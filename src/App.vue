<template>
  <div id="app">

    <!-- Conteiner -->
    <div class="conteiner">

      <!-- Left Column -->
      <div class="izq vh-100" @mouseover="changeQuestLogin()">

        <!-- Logo -->
        <div class="logo">
          <a href="https://www.wobiz.com/">
            <img src="./assets/img/logo.svg" alt="">
          </a>
        </div>
        <!-- End Logo -->

        <status-login :ingresa.sync="ingresa" v-if="ingresa == 1"></status-login>

        <forgot-pass :ingresa.sync="ingresa" v-else-if="ingresa == 2"></forgot-pass>

        <status-sign-in v-else></status-sign-in>

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
import forgotPass from './assets/components/ForgotPassword.vue'

export default {
  name: 'app',
  data () {
    return {
      ingresa: 1,
      msg: '¿No tienes una cuenta de Bowiz?',
      textButton: 'Crea una cuenta'
    }
  },
  components: {
    'status-login': statusLogin,
    'status-sign-in': statusSignIn,
    'forgot-pass': forgotPass
  },
  methods: {
    changeStatus () {
      if (this.ingresa === 1) {
        this.ingresa = 3
        this.msg = '¿Ya tienes una cuenta de Bowiz?'
        this.textButton = 'Ingresa'
      } else {
        this.ingresa = 1
        this.msg = '¿No tienes una cuenta de Bowiz?'
        this.textButton = 'Crea una cuenta'
      }
    },
    changeQuestLogin () {
      if (this.ingresa === 2) {
        this.msg = '¿Ya tienes una cuenta de Bowiz?',
        this.textButton = 'Ingresa'
      } else {
        this.msg = '¿No tienes una cuenta de Bowiz?'
        this.textButton = 'Crea una cuenta'
      }
    }
  }
}
</script>

<style>
/* Components */
body{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
a{
    text-decoration: none;
}

/* Class */
.conteiner{
  display: grid;
  grid-template-columns: 32.5% 66.5%;
}

/* Right part of grid */
.der{
  background: url(./assets/img/loginImage.png) no-repeat right center/cover;
  width: 100%;
}
  /* Text Change Status and Button */
  .position-relative{
    position: relative!important;
  }
  .change-status{
    padding-top: 42px;
    position: absolute;
    right: 7%;
    display: flex;
  }
  .change-status .quest-login{
    font-size: 14px;
    margin: 6.5px 13px 13px 0;
    color: white;
  }

/* Left part of grid */
.izq{
  padding: 30px 50px 50px 35px;
}
.izq .logo a img{
  width: 180px;
}
.greenish-blue-text{
  color: #163a49;
}
.bolder{
  font-weight: 700;
  font-size: 26px;
  margin-top: 37px;
  margin-bottom: 22px;
}
.bold{
  font-weight: bold;
}
.col-form-label{
  font-size: 13px;
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
.link-decoration :hover{
  color: #363636;
}
.forgot-pass{
  font-size: 14px!important;
  cursor: pointer;
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
.col :hover{
  background-color: #2e7492;
  border-color: #2e7492;
}
.button-text{
  font-weight: 700;
  font-size: 13px;
}
.darkgray-text{
  color: #363636;
}
.alert{
  color: white;
  background-color: #e85837;
  border: none;
  padding: 10px;
  margin-bottom: 1rem;
}
.alert-text{
  font-size: 14px;
  font-weight: 400;
  text-indent: 15px;
}
.h2-margin{
  margin-top: 38px;
}
.bigger{
  font-size: 16px;
}
.pass-title-box{
  margin-top: 1px;
}

/* Media Responsive */
@media (max-width: 993px) {
  .conteiner{
    grid-template-columns: 50% 50%;
  }
  .change-status{
    display: none;
  }
}
@media (max-width: 768px){
  .conteiner{
    grid-template-columns: 1fr;
  }
  .der{
    display: none;
  }
}
</style>
