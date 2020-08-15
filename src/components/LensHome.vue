<template>
  <div class="lensHome columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <div class="logo-box ">
        <img class="logo-wrap" src="../assets/images/logo.png" alt="logo">
      </div>
      <div class="eyes-box ">
        <img class="eyes-wrap" src="../assets/images/eyes.png" alt="eyes">
      </div>
      <div>
          <LoginButton></LoginButton>
          <RegisterButton class="aRegister"></RegisterButton>
      </div>
    </div>
  </div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'
import RegisterButton from '../components/RegisterButton.vue'

export default {
  name: 'LensHome',
  components: {
    LoginButton,
    RegisterButton
  }
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
.aRegister a {
  color: #2f3a4d;
}
</style>