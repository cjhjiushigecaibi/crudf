import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'//添加全局样式
import './plugins/element.js'
// 导入axios
import axios from 'axios'
// 挂载axios 到Vue的原型prototype的$http
Vue.prototype.$http = axios
// 设置请求的根路径,后台端口：8899
axios.defaults.baseURL = "http://localhost:8899/"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
