<template>
    <div id="title-box">
        <fieldset class="form-group darkgray-text bold">
            <legend class="col-form-label pt-0">{{title}}</legend>
            <div>
                <input type="text" 
                       :placeholder="placeHolder" 
                       class="form-control input-style mb-2" 
                       v-model="input" 
                       @input="changeString() & $emit('validar')">
                <alert :alertText.sync="alertText"
                       v-show="alert"></alert>
            </div>
        </fieldset>
    </div>
</template>

<script>
import alert from './Alert.vue'

export default {
    name: 'title-box',
    props: {
        title: {
            type: String,
            default: ''
        },
        placeHolder: {
            type: String,
            default: ''
        },
        alertText:{
            type: String,
            default: ''
        },
        alert:{
            type: Boolean,
            default: false
        }
    },
    components: {
        alert
    },
    data () {
        return {
            input: ''
        }
    },
    methods: {
        changeString () {
            let inp = '';
            inp = this.input;
            this.$emit('update:inputText', inp);
        },
        validate () {
            this.$emit('validar');
        }
    }
}
</script>