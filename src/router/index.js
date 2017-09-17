import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'new',
          name: 'new',
          alias: '/',
          component: () => import('@/components/New')
        },
        {
          path: 'hot',
          name: 'hot',
          component: () => import('@/components/Hot')
        }
      ]
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }
  ]
})
