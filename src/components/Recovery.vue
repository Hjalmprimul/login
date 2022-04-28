<template>
    <div id="forgot-password">
        <form>
            <h2 class="greenish-blue-text h2-margin bolder">
              {{title}}
            </h2>
            <p class="gray-text mt-4 mb-3 bigger">
              {{text}}
            </p>
            <alert-box :alertT.sync="alertStatusText"
                       v-if="alertStatus">
            </alert-box>
            <!-- Email -->
            <title-box v-show="!emailEnviado"
                       :title.sync="emailTitle"
                       :placeHolder.sync="emailPH"
                       :alertText.sync="emailAlertText"
                       :alert.sync="alertEmail"
                       @update:inputText="updateEmailText"
                       @validar="emailValidate()">
            </title-box>
            <!-- Email END -->
            <!-- Button -->
            <button-validate v-show="!emailEnviado"
                             :buttonText.sync="buttonText"
                             @click="validate()">
            </button-validate>
            <!-- Button END -->
            <!-- Back -->
            <div class="p1-0 mt-2 mb-2 link-decoration text-center"
                 @click="$emit('update:ingresa', 1)">
                <a class="gray-text forgot-pass">
                  Volver
                </a>
            </div>
            <!-- Back END -->
        </form>
    </div>
</template>

<script>
// Import Components
import alertBox from '../layouts/Alert.vue'
import buttonValidate from '../layouts/ButtonValidate.vue'
import titleBox from '../layouts/TitleAndBox.vue'

// Dependencies
import axios from 'axios'

// Mixins
import EmailMixins from '../mixins/email'

export default {
  name: 'forgot-password',

  data () {
    return {
      // Defaults
      buttonText: 'Recuperar contraseña',
      title: '¿Olvidaste tu contraseña?',
      text: 'No te preocupes. Escribe tu mail y te enviamos las instrucciones para recuperarla.',
      emailEnviado: false,

      // Api
      apiUrl: '', // process.env.VUE_APP_SERVICE_URL,

      // Alerts
      clickButton: false,
      alertStatus: false,
      alertStatusText: 'No encontramos una cuenta para el email ingresado.'

    }
  },

  components: {
    buttonValidate,
    titleBox,
    alertBox
  },

  methods: {

    validate () {
      this.clickButton = true
      let apiUrlString = ''
      if (this.apiUrl === '') {
        apiUrlString = 'admin.localWobiz.com'
      } else {
        apiUrlString = this.apiUrl
      }

      // valida los datos
      this.emailValidate()

      if (!this.alertEmail) {
        axios.post(apiUrlString + '/recovery', {
          username: this.emailInputText
        }).then((response) => {
          this.title = '¡Ya estás a un paso!'
          this.text = 'Te enviamos un email con las instrucciones para cambiar tu contraseña.'
          this.emailEnviado = true
        }).catch((error) => {
          const errorCode = error.code
          this.alertStatus = true
          if (errorCode === 106) {
            console.log('Wrong username')
          }
        })
      }
    }
  },

  mixins: [EmailMixins]

}
</script>
