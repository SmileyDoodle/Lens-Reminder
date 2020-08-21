<template>
  <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div 
          class="navbar-brand" 
          v-show="$route.path==='/' || $route.path==='/register' || $route.path==='/login' ? false : true"
        >
          <a class="navbar-item">
            <img src="../assets/images/logo.png" alt="logo" height="28">
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
</style>