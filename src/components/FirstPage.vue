<template>
  <div class="firstPage">
    <LensHome></LensHome>
  </div>
</template>

<script>
import LensHome from '../components/LensHome.vue'

export default {
  name: 'App',
  components: {
    LensHome
  }
}
</script>

<style>
/* .firstPage {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
} */
</style>