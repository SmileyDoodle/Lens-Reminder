<template>
  <div class="lensHome">
      <div class="logo-box column">
        <img class="logo-wrap" src="../assets/images/logo.png" alt="logo">
      </div>
      <div class="eyes-box column">
        <img class="eyes-wrap" src="../assets/images/eyes.png" alt="eyes">
      </div>
      <div>
          <LoginButton></LoginButton>
          <RegisterButton></RegisterButton>
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
    display: grid;
    justify-content: center;
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
}
</style>