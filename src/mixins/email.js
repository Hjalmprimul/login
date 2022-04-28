export default {
  data () {
    return {
      emailTitle: 'Email',
      emailPH: 'Ej: usuario@mail.com',
      emailInputText: '',
      alertEmail: false,
      emailAlertText: ''
    }
  },
  methods: {
    emailValidate () {
      const email = this.emailInputText
      const regExp = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

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
    // Modifica el valor del emailInputText
    updateEmailText (inp) {
      this.emailInputText = inp
    }
  }
}
