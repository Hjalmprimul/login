<template>
    <div id="status-login">
        <form>
            <h2 class="greenish-blue-text bolder">Ingresa a tu cuenta</h2>
            <div class="inline-alert"></div>
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
import buttonValidate from './simpleComponents/ButtonValidate.vue'
import titleBox from './simpleComponents/TitleAndBox.vue'

export default {
  name: 'status-login',
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
        
        // Inputs
        emailInputText: '',
        passInputText: '',

        // Alerts
        alertEmail: false,
        alertPass: false,
        emailAlertText: '',
        passAlertText: ''
    }
  },
  components: {
      buttonValidate,
      titleBox
  },
  methods: {
    validate () {
      this.emailValidate()
      this.passValidate()
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
        console.log('entro en el passvalidate')
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
    updateEmailText (inp) {
      this.emailInputText = inp;
    },
    updatePassText (inp) {
      this.passInputText = inp;
    }
  },
}
</script>
