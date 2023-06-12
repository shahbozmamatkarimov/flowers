import { createRouter, createWebHistory } from 'vue-router'
import { LoginView, ProductsView, AboutView, GetProduct, HomeView, ContactView } from "../views"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/about',
      name: 'aboutus',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contactus',
      component: ContactView
    },
    {
      path: '/products/:id/:title',
      name: 'getproduct',
      component: GetProduct
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
