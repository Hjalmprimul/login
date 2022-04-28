export default {
  data () {
    return {
      passTitle: 'Contraseña',
      passPH: 'Escribe tu contraseña',
      inputType: 'password',
      passInputText: '',
      alertPass: false,
      passAlertText: ''
    }
  },
  methods: {
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
    // Modifica el valor del passInputText
    updatePassText (inp) {
      this.passInputText = inp
    }
  }
}
