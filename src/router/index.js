import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Profile from '@/components/Profile'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/:username',
      name: 'User',
      component: User
    }
  ]
})
