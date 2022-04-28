<template>
    <div id="status-login">
        <form>
            <h2 class="greenish-blue-text bolder">
              Ingresa a tu cuenta
            </h2>
            <alert-box v-if="alertStatus"
                       :alertT.sync="alertStatusText">
            </alert-box>
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
            <div class="p1-0 mb-2 link-decoration"
                 @click="$emit('update:ingresa', 2)">
                <a class="gray-text forgot-pass">
                  ¿Olvidaste tu contraseña?
                </a>
            </div>
            <!-- Forgot Pass END -->
            <!-- Button -->
            <button-validate :buttonText.sync="buttonText"
                             @click="validate()">
            </button-validate>
            <!-- Button END -->
        </form>
    </div>
</template>

<script>
// Import components
import buttonValidate from '../layouts/ButtonValidate.vue'
import titleBox from '../layouts/TitleAndBox.vue'
import alertBox from '../layouts/Alert.vue'

// Dependecies
import axios from 'axios'

// Mixins
import EmailMixins from '../mixins/email'
import PasswordMixins from '../mixins/password'

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
      datosValidados: false,

      // Api
      apiUrl: '', // process.env.VUE_APP_SERVICE_URL,

      // Alerts
      clickButton: false,
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
      let apiUrlString = ''
      if (this.apiUrl === '') {
        apiUrlString = 'admin.localWobiz.com'
      } else {
        apiUrlString = this.apiUrl
      }

      // Valida los datos de entrada
      this.emailValidate()
      this.passValidate()

      this.datosValidados = !this.alertEmail && !this.alertPass
      if (this.datosValidados) {
        axios.post(apiUrlString + '/login', {
          username: this.emailInputText,
          password: this.passInputText
        }).then((response) => {
          alert('Logueado - carga el /account/feed')
        }).catch((error) => {
          this.alertStatus = true
          const codeError = error.code
          if (codeError === 106) {
            console.log('Wrong password for user')
          } else if (codeError === 108) {
            console.log('Wrong username')
          }
        })
      }
    }
  },

  mixins: [EmailMixins, PasswordMixins]
}
</script>
