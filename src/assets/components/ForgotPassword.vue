<template>
    <div id="forgot-password">
        <form>
            <h2 class="greenish-blue-text h2-margin bolder">¿Olvidaste tu contraseña?</h2>
            <p class="gray-text mt-4 mb-3 bigger">No te preocupes. Escribe tu mail y te enviamos las instrucciones para recuperarla.</p>
            <!-- Email -->
            <title-box :title.sync="emailTitle"
                       :placeHolder.sync="emailPH"
                       :alertText.sync="emailAlertText"
                       :alert.sync="alertEmail"
                       @update:inputText="updateEmailText"
                       @validar="emailValidate()"
                       ></title-box>
            <!-- Email END -->
            <!-- Button -->
            <button-validate :buttonText.sync="buttonText"
                             @click="Validate()"></button-validate>
            <!-- Button END -->
            <!-- Back Pass -->
            <div class="p1-0 mt-2 mb-2 link-decoration text-center" @click="$emit('update:ingresa', 1)">
                <a class="gray-text forgot-pass">Volver</a>
            </div>
            <!-- Back END -->
        </form>
    </div>
</template>

<script>
import buttonValidate from './simpleComponents/ButtonValidate.vue'
import titleBox from './simpleComponents/TitleAndBox.vue'

export default {
  name: 'forgot-password',
  components: {
    buttonValidate,
    titleBox
  },
  data () {
    return {
      // Defaults
      buttonText: 'Recuperar contraseña',
      emailTitle: 'Email',
      emailPH: 'Ej: usuario@mail.com',

      // Input
      emailInputText: '',

      // Alerts
      clickButton: false,
      alertEmail: false,
      emailAlertText: ''
    }
  },
  methods: {
    validate () {
      this.clickButton = true
      this.emailValidate()
    },
    // Verifica si el String contiene solo Letras
    esPalabra (str) {
      // eslint-disable-next-line prefer-regex-literals
      const regExp = new RegExp('^[A-Z]+$', 'i')
      return regExp.test(str)
    },

    // Revertir cadena
    revertir (str) {
      return str.split('').reverse().join('')
    },

    // Valida Email
    emailValidate () {
      const email = this.emailInputText
      // eslint-disable-next-line prefer-regex-literals
      const regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      if (this.clickButton) {
        if (email.length === 0) {
          this.emailAlertText = 'Necesitamos tu email.'
          this.alertEmail = true
        } else {
          this.emailAlertText = 'El email ingresado no es correcto.'
          this.alertEmail = true

          if (regExp.test(email)) {
            this.alertEmail = false
          }
        }
      }
    },

    // Modifica el valor de emailInputText
    updateEmailText (inp) {
      this.emailInputText = inp
    }
  }
}
</script>
