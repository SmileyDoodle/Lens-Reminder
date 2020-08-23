<template>
  <div class="lensHome columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <div class="logo-box ">
        <img class="logo-wrap" src="../assets/images/logo.png" alt="logo">
      </div>
      <div class="eyes-box ">
        <img class="eyes-wrap" src="../assets/images/eyes.png" alt="eyes">
      </div>
      <div class="buttons-wrap">
          <router-link to="/login" class="loginButton button is-rounded">Login</router-link>
          <router-link to="/register" class="registerButton button is-rounded">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LensHome',
}
</script>

<style>
.lensHome {
    /* display: grid; */
    justify-content: center;
    margin: 0;
}
.logo-box {
    height: 100px;
}
.logo-wrap {
    height: 80px;
}
.eyes-box {
    height: 240px
}
.eyes-wrap {
    height: 220px;
    padding-bottom: 1rem;
}
.loginButton {
  background-color: #2f3a4d;
  color: #fff;
  width: 100%;
  margin-bottom: 0.5rem;
}
.registerButton {
  color: #2f3a4d;
  width: 100%;
}

@media only screen and (min-width: 1024px) {
.lensHome {
  padding-top: 2rem;
}
.buttons-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}  
.loginButton  {
  width: 30%;
}
.registerButton  {
  width: 30%;
}
}
</style>