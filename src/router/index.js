import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    component: () => import('@/views/About/About.vue'),
    children: [
      {
        name: 'About',
        path: '',
        component: () => import('@/views/About/Details/Education.vue'),
        meta: {
          title: 'ABOUT ME'
        }
      },
      {
        name: 'About/career',
        path: 'career',
        component: () => import('@/views/About/Details/Career'),
        meta: {
          title: 'ABOUT ME'
        }
      },
      {
        name: 'About/knowledge',
        path: 'knowledge',
        component: () => import('@/views/About/Details/Knowledge'),
        meta: {
          title: 'ABOUT ME'
        }
      }
    ]
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts'),
    meta: {
      title: 'CONTACTS'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      title: 'PROJECTS'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
