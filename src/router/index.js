import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/ShopHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopCart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopCategory.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopProfile.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
