<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--3.编写组件标签-->
    <HelloWorld/>
  </div>
</template>

<script>
  // 1.引入组件
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    // 2.映射组件标签
    components: {HelloWorld}
  }
</script>

<style scoped>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
