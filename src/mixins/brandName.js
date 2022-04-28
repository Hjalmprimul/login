export default {
  data () {
    return {
      nameTitle: 'Nombre de tu marca',
      namePH: 'Ej: Mi tienda online',
      nameInputText: '',
      alertName: false,
      nameAlertText: ''
    }
  },

  methods: {
    // Valida el nombre de la compañia
    nameValidate () {
      const name = this.nameInputText

      if (this.clickButton) {
        if (name.length === 0) {
          this.nameAlertText = 'Necesitamos tu nombre'
          this.alertName = true
        } else if (name.length >= 1) {
          this.alertName = false
        }
      }
    },
    updateNameText (inp) {
      this.nameInputText = inp
    }
  }
}
