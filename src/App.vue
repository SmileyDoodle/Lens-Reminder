
<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
   data() {
    return {
      login: true,
    }
  },
}
</script>

<style>
body {
  background-color: #eaded2;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: grid;
  min-height: 93vh;
  grid-template-rows: auto 1fr auto;
}

@media only screen and (min-width: 1024px) {
#app {
  min-height: 100vh;
}
}
</style>