<template>
    <div id="title-box">
        <fieldset class="form-group darkgray-text bold">
            <legend class="col-form-label pt-0">{{title}}</legend>
            <div>
                <input v-bind:type="tipo"
                       :placeholder="placeHolder"
                       class="form-control input-style mb-2"
                       v-model="input"
                       @input="changeString() & $emit('validar')">
                <alert :alertT.sync="alertT"
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
    alertText: {
      type: String,
      default: ''
    },
    alert: {
      type: Boolean,
      default: false
    },
    tipo: {
      type: String,
      default: 'text'
    }
  },
  components: {
    alert
  },
  data () {
    return {
      input: '',
      alertT: ''
    }
  },
  methods: {
    changeString () {
      let inp = ''
      inp = this.input
      this.$emit('update:inputText', inp)
    }
  },
  beforeUpdate () {
    this.alertT = this.alertText
  }
}
</script>
