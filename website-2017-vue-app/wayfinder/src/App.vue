<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul class="links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/work">Work</router-link></li>
      <li><router-link to="/ideas">Ideas</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.links li {
  display: inline;
}
</style>
