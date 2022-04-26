<template>
    <div id="alert">
        <div class="alert alert-danger alert-inline mt-3">
            <div class="alert-text">{{alertText}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'alert',
    props:{
        alertText: {
            type: String,
            default: ''
        }
    }
}
</script>