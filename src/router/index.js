import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import News from '../views/News.vue'
import Contacts from '../views/Contacts.vue'
import Article from '../views/Article.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: Product,
  },
  {
    path: '/news',
    name: 'News',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: News,
    props: true
  },
  {
    path: '/contact',
    name: 'Contacts',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: Contacts,
    props: true
  },
  {
    path: '/article',
    name: 'Article',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: Article,
  },
  {
    path: '/article/1',
    name: 'ArticleDetail',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: ArticleDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: About,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'login',
      requiresAuth: false,
    },
    component: Login,
    props: true
  },

  //admin
  {
    path: '/admin',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/Index.vue'),
  },

  { 
    path: '/:pathMatch(.*)*', 
    component: () => import('../components/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
