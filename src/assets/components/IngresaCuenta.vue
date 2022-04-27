<template>
    <div id="status-login">
        <form>
            <h2 class="greenish-blue-text bolder">Ingresa a tu cuenta</h2>
            <alert-box v-if="alertStatus" :alertT.sync="alertStatusText"></alert-box>
            <!-- Email -->
            <title-box :title.sync="emailTitle"
                       :placeHolder.sync="emailPH"
                       :alertText.sync="emailAlertText"
                       :alert.sync="alertEmail"
                       @update:inputText="updateEmailText"
                       @validar="emailValidate()">
            </title-box>
            <!-- Email END -->
            <!-- Contraseña -->
            <title-box :title.sync="passTitle"
                       :placeHolder.sync="passPH"
                       :alertText.sync="passAlertText"
                       :alert.sync="alertPass"
                       @update:inputText="updatePassText"
                       @validar="passValidate()"
                       class="pass-title-box"
                       :tipo.sync="inputType">
            </title-box>
            <!-- Contraseña END -->
            <!-- Forgot Pass -->
            <div class="p1-0 mb-2 link-decoration" @click="$emit('update:ingresa', 2)">
                <a class="gray-text forgot-pass">¿Olvidaste tu contraseña?</a>
            </div>
            <!-- Forgot Pass END -->
            <!-- Button -->
            <button-validate :buttonText.sync="buttonText" @click="validate()"></button-validate>
            <!-- Button END -->
        </form>
    </div>
</template>

<script>
// Imports
import buttonValidate from './simpleComponents/ButtonValidate.vue'
import titleBox from './simpleComponents/TitleAndBox.vue'
import axios from 'axios'
import alertBox from './simpleComponents/Alert.vue'

export default {
  name: 'status-login',

  // Props from App.vue
  props: {
    ingresa: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      // Defaults
      buttonText: 'Ingresa a mi cuenta',
      emailTitle: 'Email',
      emailPH: 'Ej: usuario@mail.com',
      passTitle: 'Contraseña',
      passPH: 'Escribe tu contraseña',
      datosValidados: false,

      // Inputs
      inputType: 'password',
      emailInputText: '',
      passInputText: '',

      // Alerts
      clickButton: false,
      alertEmail: false,
      alertPass: false,
      emailAlertText: '',
      passAlertText: '',
      alertStatus: false,
      alertStatusText: 'Tu email o contraseña son incorrectos. Revísalos y vuelve a intentar.'
    }
  },

  components: {
    buttonValidate,
    titleBox,
    alertBox
  },

  methods: {
    // Activa la Validacion (Click ValidateButton)
    validate () {
      this.clickButton = true
      this.emailValidate()
      this.passValidate()
      this.datosValidados = !this.alertEmail && !this.alertPass
      if (this.datosValidados) {
        axios.post('https://jsonplaceholder.typicode.com/users', {
          Username: this.emailInputText,
          Password: this.passInputText
        }).then((response) => {
          const status = response.status

          if (status === 201) {
            this.alertStatus = true
          } else if (status === 200) {
            alert('Success')
          }
        }).catch((error) => {
          console.log(error)
        })
      }
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

    // Valida el password
    passValidate () {
      const pass = this.passInputText

      if (this.clickButton) {
        if (pass.length === 0) {
          this.passAlertText = 'Necesitamos tu contraseña.'
          this.alertPass = true
        } else if (pass.length >= 1) {
          this.passAlertText = 'La contraseña no tiene un formato válido.'
          this.alertPass = true

          if (pass.length >= 6) {
            this.alertPass = false
          }
        }
      }
    },

    // Modifica el valor del emailInputText
    updateEmailText (inp) {
      this.emailInputText = inp
    },

    // Modifica el valor del passInputText
    updatePassText (inp) {
      this.passInputText = inp
    }
  }
}
</script>
