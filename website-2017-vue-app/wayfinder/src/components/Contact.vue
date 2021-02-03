<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <h2>This is a simple test page for the contact route.</h2>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Contact page, matey!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
