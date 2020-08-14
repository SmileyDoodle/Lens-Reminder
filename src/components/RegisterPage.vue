<template>
  <div>
      <input type="text">
      <input type="text">
      <input type="text">
      <RegisterButton></RegisterButton>
  </div>
</template>

<script>
import RegisterButton from '../components/RegisterButton.vue'

export default {
    name: 'RegisterPage',
    components: {
        RegisterButton
    }
}
</script>

<style>

</style>