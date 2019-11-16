// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Home from './components/Home'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import './assets/icon/iconfont.css';
import qs from 'qs'

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI)
Vue.config.productionTip = false
// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
var Qs = require('qs');
axios.defaults.baseURL = "http://127.0.0.1:8324"
//设置全局，每次ajax请求携带cookies
// axios.defaults.withCredentials = true
// 将API方法绑定到全局
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  components: { Home },
  template: '<Home/>' //这是template属性模板渲染
})
