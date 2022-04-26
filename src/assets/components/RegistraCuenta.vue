<template>
    <div id="status-sign-in">
        <h2 class="greenish-blue-text mt-3 mb-1 bolder">Comienza a vender Online</h2>
        <p class="gray-text mt-4 mb-3">Crea tu cuenta y prueba Wobiz 14 días gratis.</p>
        <!-- Nombre de usuario -->
        <title-box :title.sync="nameTitle" 
                   :placeHolder.sync="namePH"
                   :alertText.sync="nameAlertText"
                   :alert.sync="alertName"
                   @update:inputText="updateNameText"
                   @validar="nameValidate()"
                   ></title-box>
        <!-- Nombre de usuario END -->
        <!-- Email -->
        <title-box :title.sync="emailTitle" 
                   :placeHolder.sync="emailPH"
                   :alertText.sync="emailAlertText"
                   :alert.sync="alertEmail"
                   @update:inputText="updateEmailText"
                   @validar="emailValidate()"
                   ></title-box>
        <!-- Email END -->
        <!-- Contraseña -->
        <title-box :title.sync="passTitle" 
                   :placeHolder.sync="passPH"
                   :alertText.sync="passAlertText"
                   :alert.sync="alertPass"
                   @update:inputText="updatePassText"
                   @validar="passValidate()"
                   class="pass-title-box"
                   ></title-box>
        <!-- Contraseña END -->
        <!-- Button -->
        <button-validate :buttonText.sync="buttonText"
                         @click="validate()"
                         ></button-validate>
        <!-- Button END -->
        <!-- Terminos y condiciones -->
        <p class="gray-text mt-2 text-center" style="font-size: 13px;">
            Al registrarme declaro que acepto los
            <a href="https://www.wobiz.com/termsandconditions" target="_blank" class="darkgray-text a-terminos">términos y condiciones</a>
             y las
            <a href="https://www.wobiz.com/privacy" target="_blank" class="darkgray-text a-terminos">políticas de provacidad</a>
            de Wobiz.
        </p>
        <!-- Terminos y condiciones END -->
    </div>
</template>

<script>
import buttonValidate from './simpleComponents/ButtonValidate.vue'
import titleBox from './simpleComponents/TitleAndBox.vue'

export default {
  name: 'status-sign-in',
  data () {
      return {
        // Defaults
        buttonText: 'Crea mi cuenta en Wobiz',
        nameTitle: 'Nombre de tu marca',
        namePH: 'Ej: Mi tienda online',
        emailTitle: 'Email',
        emailPH: 'Ej: usuario@mail.com',
        passTitle: 'Contraseña',
        passPH: 'Escribe tu contraseña',

        // Inputs
        emailInputText: '',
        passInputText: '',
        nameInputText: '',

        // Alerts
        alertEmail: false,
        alertPass: false,
        alertName: false,
        emailAlertText: '',
        passAlertText: '',
        nameAlertText: ''
      }
  },
  components: {
      buttonValidate,
      titleBox,
  },
  methods: {
    validate () {
      this.emailValidate()
      this.passValidate()
      this.nameValidate()
    },
    emailValidate () {
      let email = this.emailInputText

      if (email.length === 0) {
        this.emailAlertText = 'Necesitamos tu email.'
        this.alertEmail = true

      } else if (email.length > 0) {
        this.emailAlertText = 'El email ingresado no es correcto.'
        this.alertEmail = true

        if (email.includes('@') && email.slice(0, email.indexOf('@') > 0)) {
          email = email.slice(email.indexOf('@') + 1);

          if (email.slice(0, email.indexOf('.')).length >= 1 && email.includes('.')) {
            email = email.slice(email.indexOf('.') +1)

            if (email.length >= 2){
              this.alertEmail = false
            }
          }
        }
      }

    },
    passValidate () {
      let pass = this.passInputText
      
      if (pass.length === 0){
        this.passAlertText = 'Necesitamos tu contraseña.'
        this.alertPass = true

      } else if (pass.length >= 1){
        this.passAlertText = 'La contraseña no tiene un formato válido.'
        this.alertPass = true

        if(pass.length >= 6){
          this.alertPass = false
        }
      }
    },
    nameValidate () {
        let name = this.nameInputText

        if (name.length === 0) {
            this.nameAlertText = 'Necesitamos tu nombre'
            this.alertName = true
        } else if (name.length >= 1){
            this.alertName = false
        }
    },
    updateEmailText (inp) {
      this.emailInputText = inp;
    },
    updatePassText (inp) {
      this.passInputText = inp;
    },
    updateNameText (inp) {
      this.nameInputText = inp;
    }
  }
}
</script>
