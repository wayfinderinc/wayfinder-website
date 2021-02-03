import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Ideas from '@/components/Ideas'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/ideas',
      name: 'Ideas',
      component: Ideas
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
