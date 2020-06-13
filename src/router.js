import Vue from 'vue'
import VueRouter from 'vue-router'

// Page Not Found
import PageNotFound from '@/views/PageNotFound'

// Home
import Home from '@/views/Home'

// Repos
import Repos from '@/views/Repos/Repos'
import ReposList from '@/views/Repos/ReposList'
import ReposReport from '@/views/Repos/ReposReport'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: PageNotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name: 'repos',
      path: '/repos',
      redirect: { name: 'repos-list' },
      component: Repos,
      children: [
        {
          name: 'repos-list',
          path: 'list',
          component: ReposList
        },
        {
          name: 'repos-report',
          path: 'report',
          component: ReposReport
        }
      ]
    }
  ],
  duplicateNavigationPolicy: 'ignore'  
})