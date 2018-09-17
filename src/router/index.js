import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../containers/Home'
import Home1 from '../containers/Home1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home1',
      component: Home1
    },
    {
      path: '/helloword',
      component: HelloWorld
    }
  ]
})
