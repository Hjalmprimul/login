<template>
    <div id="status-sign-in">
        <h2 class="greenish-blue-text mt-3 mb-1 bolder">
          Comienza a vender Online
        </h2>
        <p class="gray-text mt-4 mb-3">
          Crea tu cuenta y prueba Wobiz 14 días gratis.
        </p>
        <alert-box :alertT.sync="alertStatusText"
                   v-if="alertStatus">
        </alert-box>
        <!-- Nombre de usuario -->
        <title-box :title.sync="nameTitle"
                   :placeHolder.sync="namePH"
                   :alertText.sync="nameAlertText"
                   :alert.sync="alertName"
                   @update:inputText="updateNameText"
                   @validar="nameValidate()">
        </title-box>
        <!-- Nombre de usuario END -->
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
        <title-box class="pass-title-box"
                   :title.sync="passTitle"
                   :placeHolder.sync="passPH"
                   :alertText.sync="passAlertText"
                   :alert.sync="alertPass"
                   @update:inputText="updatePassText"
                   @validar="regexPassword()"
                   :tipo.sync="inputType">
        </title-box>
        <!-- Contraseña END -->
        <!-- Button -->
        <button-validate :buttonText.sync="buttonText"
                         @click="validate()">
        </button-validate>
        <!-- Button END -->
        <!-- Terminos y condiciones -->
        <p class="gray-text mt-2 text-center"
           style="font-size: 13px;">
            Al registrarme declaro que acepto los
            <a href="https://www.wobiz.com/termsandconditions"
               target="_blank"
               class="darkgray-text a-terminos">
               términos y condiciones
            </a>
             y las
            <a href="https://www.wobiz.com/privacy"
               target="_blank"
               class="darkgray-text a-terminos">
               políticas de provacidad
            </a>
            de Wobiz.
        </p>
        <!-- Terminos y condiciones END -->
    </div>
</template>

<script>
// import components
import buttonValidate from '../components/ButtonValidate.vue'
import titleBox from '../components/TitleAndBox.vue'
import alertBox from '../components/Alert.vue'

// Dependencies
import axios from 'axios'

// Mixins
import EmailMixins from '../mixins/email'
import PasswordMixins from '../mixins/password'
import BrandNameMixins from '../mixins/brandName'

export default {
  name: 'status-sign-in',

  data () {
    return {
      // Defaults
      buttonText: 'Crea mi cuenta en Wobiz',
      datosValidados: false,

      // Api
      apiUrl: '', // process.env.VUE_APP_SERVICE_URL,

      // Alerts
      clickButton: false,
      alertStatus: false,
      alertStatusText: 'El email ingresado pertenece a otra cuenta. Intenta con uno diferente.'
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
      this.regexPassword()
      this.nameValidate()

      this.datosValidados = !this.alertEmail && !this.alertPass && !this.alertName
      if (this.datosValidados) {
        axios.post(apiUrlString + '/signup', {
          username: this.emailInputText,
          password: this.passInputText,
          brandName: this.nameInputText
        }).then((response) => {
          console.log('Registrado')
        }).catch((error) => {
          const errorCode = error.code
          this.alertStatus = true
          if (errorCode === 106) {
            console.log('Wrong username')
          }
        })
      }
    },

    regexPassword (){
      const regExp = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      if (!regExp.test(this.passInputText) && this.clickButton) {
        this.alertPass = true
        this.passAlertText = 'Ingresa una contraseña que tenga más de 8 caracteres, mayúsculas, minúsculas y al menos un número.'
      }
    }

  },

  mixins: [EmailMixins, PasswordMixins, BrandNameMixins]
}
</script>
