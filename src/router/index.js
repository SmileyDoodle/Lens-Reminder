import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    redirect: '/',
  },
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
    component: () => import(/* webpackChunkName: "about" */ '../views/InformationPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/edit',
    name: 'EditPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if(isAuthenticated && to.path === '/') {
    next('/edit')
  }
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
export default router
