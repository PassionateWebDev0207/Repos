import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/views/PageNotFound'
import Repos from '@/views/Repos.vue'
import ReposList from '@/views/Repos/ReposList'
import ReposReport from '@/views/Repos/ReposReport'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: PageNotFound
    },
    {
      path: '/',
      component: Repos,
      children: [
        {
          path: 'list',
          component: ReposList
        },
        {
          path: 'report',
          component: ReposReport
        }
      ]
    }
  ]
})

export default router