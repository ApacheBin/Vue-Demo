<template>
  <mt-button type="primary" @click.native="handleClick" style="width: 100%">点一下</mt-button>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    name: 'App',
    methods: {
      handleClick () {
        Toast('我爱你，老婆！！！')
      }
    }
  }
</script>

<style>

</style>
