// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件
// 创建Vue实例
import Vue from 'vue'
// 1.引入组件
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 2.映射组件标签
  components: { App },
  // 3.编写组件标签
  template: '<App/>'
})
