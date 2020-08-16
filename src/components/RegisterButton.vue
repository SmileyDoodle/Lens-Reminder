<template>
    <router-link :to="toURL" tag="button" class="register button is-rounded" v-if="toURL">
      Register
    </router-link>
</template>

<script>
export default {
  name: 'RegisterButton',
  props: ['toURL']
}
</script>

<style>
.register {
    width: 100%;
}
</style>