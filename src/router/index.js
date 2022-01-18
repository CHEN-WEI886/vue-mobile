import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
          index: 1
        }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my.vue'),
        meta: {
          index: 2
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: {
          index: 1
        }
      },
  ],
})

export default router