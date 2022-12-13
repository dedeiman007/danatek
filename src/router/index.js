import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ProductDetail from '../views/ProductDetail.vue'
import News from '../views/News.vue'
import Contacts from '../views/Contacts.vue'
import Article from '../views/Article.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
    path: '/product/:id',
    name: 'ProductDetail',
    meta: {
      layout: 'front',
      requiresAuth: false,
    },
    component: ProductDetail,
    props: true
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
    path: '/article/:id',
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
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'login',
      requiresAuth: false,
    },
    component: Register,
    props: true
  },

  //admin
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/Index.vue'),
  },
  {
    path: '/admin/about',
    name: 'admin-about',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/about/Index.vue'),
  },
  
  {
    path: '/admin/home',
    name: 'admin-home',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/home/Index.vue'),
  },
  {
    path: '/admin/footer',
    name: 'admin-footer',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/footer/Index.vue'),
  },
  {
    path: '/admin/contact-us',
    name: 'admin-contact',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/contact/Index.vue'),
  },
  {
    path: '/admin/article',
    name: 'admin-article',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/article/Index.vue'),
  },
  {
    path: '/admin/article/create',
    name: 'admin-article-create',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/article/Create.vue'),
  },
  {
    path: '/admin/article/:id',
    name: 'admin-article-edit',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/article/Edit.vue'),
  },
  {
    path: '/admin/product/category',
    name: 'admin-product-category',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/product/category/Index.vue'),
  },
  {
    path: '/admin/product/category/create',
    name: 'admin-product-category-create',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/product/category/Create.vue'),
  },
  {
    path: '/admin/product/category/:id',
    name: 'admin-product-category-edit',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/product/category/Edit.vue'),
  },
  {
    path: '/admin/product',
    name: 'admin-product',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/product/Index.vue'),
  },
  {
    path: '/admin/product/create',
    name: 'admin-product-create',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/product/Create.vue'),
  },
  {
    path: '/admin/product/:id',
    name: 'admin-product-edit',
    meta: {
      layout: 'admin',
      requiresAuth: false,
    },
    component: () => import('../views/admin/product/Edit.vue'),
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
