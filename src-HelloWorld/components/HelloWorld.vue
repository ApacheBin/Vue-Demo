<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to my vue-demo!!!'
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
