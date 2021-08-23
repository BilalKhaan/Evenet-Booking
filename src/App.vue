<template>
  <div id="app">
    <Navbar v-if="$route.path == '/'" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './layout/Layout.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@font-face {
  font-family: "Almarai";
  src: local("Almarai"),
   url(./assets/Fonts/Almarai/Almarai-Regular.ttf) format("truetype");
  font-display: swap;

}
#app {
  background-color: #E5E5E5;
  font-family: "Almarai";
  font-display: swap;
}
@import './assets/css/global.css';
</style>
