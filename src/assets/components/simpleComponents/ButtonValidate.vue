<template>
<div id="button-validate">
    <div class="col">
        <button type="button" class="btn btn-secondary btn-validate mt-3 mb-2" @click="$emit('click')">
            <div class="button-text">{{ buttonText }}</div>
        </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'button-validate',
  props: {
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>
