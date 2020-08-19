<template>
  <div class="register columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <h1>Hello</h1>
      <form>
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
      <p>Have an account? <router-link to="/login">Login</router-link> </p>
      <div v-if="secret">
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
}
</style>