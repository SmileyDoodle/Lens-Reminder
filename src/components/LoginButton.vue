<template>
  <!-- <div class="columns is-mobile is-centered">
    <div class="column is-two-thirds"> -->
      <button class="loginButton button is-rounded">
        <router-link to="/login" class="aLogin">Login</router-link>
      </button>
    <!-- </div>
  </div> -->
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
.aLogin {
  color: #fff;
}
</style>