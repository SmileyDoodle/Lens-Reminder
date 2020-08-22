import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterPage.vue')
  },
  {
    path: '/information',
    name: 'InformationPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/InformationPage.vue')
  },
  {
    path: '/edit',
    name: 'EditPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPage.vue')
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
