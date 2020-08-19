<template>
    <button type="button" class="register button is-rounded" @click="$emit('clicked')">
      Register
    </button>
</template>

<script>
export default {
  name: 'RegisterButton'
}
</script>

<style>
.register {
    width: 100%;
}
</style>