import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TqglManager from '@/components/TqglManager'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/',
        component: TqglManager,
        name:'台区管理',
        iconCls:'el-icon-menu',
        redirect: '/components/TqglManager', //重定向地址，在面包屑中点击会重定向去的地址
        children: [{
          path: '/components',
          component: TqglManager,
          name: 'TqglManager',
          meta: {
            title: 'TqglManager',
            icon: 'lock', //图标
            noCache: true // 不会被 <keep-alive> 缓存
          }
        }]
    }

  ]
})
