
<template>
  <div id="app">
      <!-- <Home></Home> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// import Home from './views/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
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
  height: 93vh;
  grid-template-rows: auto 1fr auto;
}
</style>