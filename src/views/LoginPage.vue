<template>
  <div class="login columns is-mobile is-centered">
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
        <!-- <LoginButton @click="login" :toURL="'/information'"></LoginButton> -->
        <button @click="login" type="button">Login</button>
      </form>
      <p>Need an account? <router-link to="/register">Register</router-link> </p>
    </div>
  </div>
</template>

<script>
// import LoginButton from '../components/LoginButton.vue'
import firebase from 'firebase'

export default {
  name: 'LoginPage',
  // components: {
  //   LoginButton
  // },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).
        then (
          user => {
            console.log(user);
            this.$router.push({ path: 'information' });
          }
        ),
        err => {
          console.log(err);
        }
    }
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