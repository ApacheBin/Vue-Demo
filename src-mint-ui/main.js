import Vue from 'vue'
import App from './App'
import {Button, Swipe} from 'mint-ui'
// 注册成标签，全局
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
