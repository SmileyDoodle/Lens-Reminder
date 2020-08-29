<template>
  <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
          <div 
            class="navbar-brand level" 
            v-show="$route.path==='/' || $route.path==='/register' || $route.path==='/login' ? false : true"
          >
              <div class="level-item">
                <router-link 
                  to="/information"
                >
                  <img 
                    class="arrow" 
                    src="../assets/images/arrow.svg" 
                    alt="back"  
                    :class="{'isHidden': ($route.path !=='/edit' && $route.path !=='/about')}"
                  > 
                </router-link>
              </div>
              <div class="level-item" >
                <a class="navbar-item">
                  <img src="../assets/images/logo.png" alt="logo" height="28">
                </a>
              </div>
              <div class="level-item">
                <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
              </div>
          </div>
          <!--
          Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
          -->
          <div 
            class="navbar-menu" 
            :class="{ 'is-active': showNav }"
            v-show="$route.path==='/' || $route.path==='/register' || $route.path==='/login' ? false : true"  
          >
            <div class="navbar-end">
              <a class="navbar-item" @click="redirect()">
                About
              </a>
              <a class="navbar-item" @click="logout()">
                Logout
              </a>
            </div>
          </div>
      </nav>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'Header',
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    redirect() {
        this.$router.push('/about')
        this.showNav = !this.showNav
    },
    logout() {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        this.$router.go('/')
      }),
      err => {
          console.log(err);
        }
    }
  }
}
</script>

<style>
header {
  padding: 1rem 2rem;
}
.arrow {
  height: 28px;
}
.level-item {
  margin-bottom: 0 !important;
}
.level-item:first-child {
  margin-right: 20px;
}
.navbar {
  background-color: #eaded2;
}
.navbar-burger:hover {
  background-color: #eaded2;
}
.navbar-menu {
  position: absolute;
  width: 100%;
  opacity: 0.95;
}
.isHidden {
  visibility: hidden;
}

@media only screen and (min-width: 1024px) {
header {
  display: flex;
  align-items: center;
}
.navbar {
  width: 50%;
  margin: 0 auto
}
.navbar-brand {
  width: 95%;
}
a.navbar-item:hover {
  background-color: #eaded2;
  color: #2f3a4d;
}
.level-item:first-child {
  justify-content: end;
  z-index: 1;
}
}
</style>