import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Info from '@/components/info'
import Link from '@/components/link'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/Link',
      name: 'Link',
      component: Link
    },
    {
      path: '/Other',
      name: 'Other',
      component: Other
    }
  ]
})
