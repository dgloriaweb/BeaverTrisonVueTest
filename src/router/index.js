import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import MealsList from '../views/MealsList.vue'
import MenuDetail from '../views/MenuDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Menu Items List',
    component: MealsList
  },
  {
    path: '/meals/:id',
    name: 'Menu Detail',
    component: MenuDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
