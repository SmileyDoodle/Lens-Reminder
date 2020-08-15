<template>
  <div class="login columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <h1>Hello</h1>
      <form>
        <input
          class="button is-rounded column"
          name="email"
          placeholder="Email"
        />
        <input
          class="button is-rounded column"
          name="password"
          placeholder="Password"
        />
        <LoginButton></LoginButton>
      </form>
    </div>
  </div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginButton
  }
}
</script>

<style>
.button {
  width: 100%;
}
.login {
  display: grid;
  justify-content: center;
  margin: 0;
}
.login h1 {
  font-size: 2rem;
  padding: 2rem 0 4rem; 
}
input {
  margin-bottom: 0.5rem !important;
}
</style>