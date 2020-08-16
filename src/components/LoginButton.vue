<template>
  <!-- <div class="columns is-mobile is-centered">
    <div class="column is-two-thirds"> -->
      <router-link :to="toURL"  tag="button" class="loginButton button is-rounded">
        Login
      </router-link>
    <!-- </div>
  </div> -->
</template>

<script>
export default {
  name: 'LoginButton',
  props: ['toURL']
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