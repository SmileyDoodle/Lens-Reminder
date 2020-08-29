<template>
  <div class="login columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <h1>Hello</h1>
      <div class="inputs-button-wrap">
        <form autocomplete="off">
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
          <LoginButton @clicked="login" class="loginButton"></LoginButton>
        </form>
      </div>
      <p>Need an account? <router-link to="/register" class="account">Register</router-link> </p>
    </div>
  </div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'
import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/firestore'

export default {
  name: 'LoginPage',
  components: {
    LoginButton
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        })
        .catch(err => {
              console.log(err);
            })
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (window.localStorage.getItem('date') === null || window.localStorage.getItem('day') === null) {
          this.$router.push({ path: 'edit' });
        } else {
          this.$router.push({ path: 'information' });
        }
      }
    })
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
.loginButton {
  margin-bottom: 1rem !important;
}

@media only screen and (min-width: 1024px) {
.inputs-button-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 30%;
}
}
</style>