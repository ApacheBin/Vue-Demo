<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import UsersMain from './components/Main'
  export default {
    name: 'App',
    components: {UsersMain, Search}
  }
</script>

<style>

</style>
