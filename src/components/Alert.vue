<template>
    <div id="alert-component">
        <div class="alert alert-danger alert-inline mt-3">
            <div class="alert-text">
              {{alertT}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'alert-component',
  props: {
    alertT: {
      type: String,
      default: ''
    }
  }
}
</script>
