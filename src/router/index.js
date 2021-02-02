import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Index.vue'),
    },
    {
      path: '/about',
      name: 'About me',
      component: () => import('@/views/about/Index.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/portfolio/Index.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/blog/Index.vue'),
    },
    {
      path: '/blog-post',
      name: 'Blog Post',
      component: () => import('@/views/blog-post/Index.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/Index.vue'),
    },
  ],
})
