<template>
    <div>
      <div v-if="!repoUrl">loading</div>
      <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted () {
      const url = `https://api.github.com/search/repositories?q=vu&sort=stars`
      // this.$http.get(url).then(
      //   response => {
      //     // 成功
      //     const result = response.data
      //     const mostRepo = result.items[0]
      //     this.repoUrl = mostRepo.html_url
      //     this.repoName = mostRepo.name
      //   },
      //   response => {
      //     alert('请求失败')
      //   }
      // )
      // axios
      axios.get(url).then(
        response => {
          // 成功
          const result = response.data
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        }).catch(error => {
        alert(error)
      })
    }
  }
</script>

<style>

</style>
