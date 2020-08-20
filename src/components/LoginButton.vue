<template>
      <button type="button" class="loginButton button is-rounded" @click="$emit('clicked')">
        Login
      </button>
</template>

<script>
export default {
  name: 'LoginButton', 
}
</script>

<style>
.loginButton {
  background-color: #2f3a4d;
  color: #fff;
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>