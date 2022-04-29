<template>
  <div id="app">

    <!-- Container-app -->
    <div class="container-app">

      <!-- Left Column -->
      <div class="izq vh-100" @mouseover="changeQuestLogin()">

        <!-- Logo -->
        <div class="logo">
          <a href="https://www.wobiz.com/">
            <img src="./assets/logo.svg" alt="">
          </a>
        </div>
        <!-- End Logo -->

        <login :ingresa.sync="ingresa" v-if="ingresa == 1"></login>

        <recovery :ingresa.sync="ingresa" v-else-if="ingresa == 2"></recovery>

        <signup v-else></signup>

      </div>
      <!-- End Left Column -->

      <!-- Right Column -->
      <div class="der vh-100 position-relative">
          <div class="change-status">
            <!-- Text -->
            <div class="quest-login" v-text="msg"></div>

            <!-- Button change Status -->
            <button @click="changeStatus()" class="btn btn-outline-light button-text">
              <div v-text="textButton"> </div>
            </button>
          </div>
      </div>
      <!-- End Right Column -->

    </div>
    <!-- End Container-app -->

  </div>
</template>

<script>
// Imports
import login from './layouts/Login.vue'
import signup from './layouts/Signup.vue'
import recovery from './layouts/Recovery.vue'

export default {
  name: 'app',
  data () {
    return {
      ingresa: 1,
      msg: '¿No tienes una cuenta de Wobiz?',
      textButton: 'Crea una cuenta'
    }
  },

  components: {
    login,
    signup,
    recovery
  },

  methods: {

    changeStatus () {
      if (this.ingresa === 1) {
        this.ingresa = 3
        this.msg = '¿Ya tienes una cuenta de Wobiz?'
        this.textButton = 'Ingresa'
      } else {
        this.ingresa = 1
        this.msg = '¿No tienes una cuenta de Wobiz?'
        this.textButton = 'Crea una cuenta'
      }
    },

    changeQuestLogin () {
      if (this.ingresa === 2) {
        this.msg = '¿Ya tienes una cuenta de Wobiz?'
        this.textButton = 'Ingresa'
      } else if (this.ingresa === 1) {
        this.msg = '¿No tienes una cuenta de Wobiz?'
        this.textButton = 'Crea una cuenta'
      }
    }
  }
}
</script>
