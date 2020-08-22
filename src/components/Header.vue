<template>
  <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div 
          class="navbar-brand" 
          v-show="$route.path==='/' || $route.path==='/register' || $route.path==='/login' ? false : true"
        >
           <a class="navbar-item" href="/">
            <img src="../assets/images/logo.png" alt="logo" height="28">
           </a>
          
            <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <!--
          Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
          -->
          <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-end">
              <a class="navbar-item" href="/about">
                About
              </a>
              <a class="navbar-item" href="/">
                Logout
              </a>
            </div>
          </div>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style>
header {
    padding: 1rem 2rem;
}
.navbar {
  background-color: #eaded2;
}
.navbar-burger:hover {
  background-color: #eaded2;
}
.navbar-menu {
  opacity: 0.5;
}
</style>