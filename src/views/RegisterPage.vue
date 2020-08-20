<template>
  <div class="register columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <h1>Hello</h1>
      <form v-if="!secret" autocomplete="off">
        <input
          class="button is-rounded column"
          name="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          class="button is-rounded column"
          name="password"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <input
          class="button is-rounded column"
          name="password"
          type="password"
          placeholder="Repeat password"
        />
        <RegisterButton @clicked="register" class="bRegister"></RegisterButton>
      </form>
      <p>Have an account? <router-link to="/login" class="account">Login</router-link> </p>
      <div v-if="secret" class="secret">
        <p>Use these credentials to login:</p>
        <p> email: john.doe@gmail.com </p>
        <p> password: abc123 </p>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterButton from '../components/RegisterButton.vue'

export default {
  name: 'RegisterPage',
  components: {
    RegisterButton
  },
  data() {
    return {
      email: "",
      password: "",
      secret: false
    }
  },
  methods: {
    register() {
        this.secret = true;
    }
  },
}
</script>

<style>
.button {
  width: 100%;
}
.register {
  display: grid;
  justify-content: center;
  margin: 0;
}
.register h1 {
  font-size: 2rem;
  padding: 2rem 0 4rem; 
}
input {
  margin-bottom: 0.5rem;
}
.bRegister {
  background-color: #2f3a4d;
  color: #fff;
  margin-bottom: 1rem;
}
.account {
  color: #2f3a4d;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity ease 0.5s;
}
.account:hover {
  opacity: 1;
  transition: opacity ease 0.5s;
}
.secret {
  padding: 2rem 0;
}
</style>