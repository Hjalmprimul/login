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
                             @click="emailValidate()"></button-validate>
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
import buttonValidate from './simpleComponents/ButtonValidate.vue';
import titleBox from './simpleComponents/TitleAndBox.vue';

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
            alertEmail: false,
            emailAlertText: ''
        }
    },
    methods: {
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
        updateEmailText (inp) {
            this.emailInputText = inp;
        },
    }
}
</script>
