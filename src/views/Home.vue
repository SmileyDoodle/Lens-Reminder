<template>
  <div class="home">
    <FirstPage></FirstPage>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstPage from '@/components/FirstPage.vue'

export default {
  name: 'Home',
  components: {
    FirstPage
  }
}
</script>
