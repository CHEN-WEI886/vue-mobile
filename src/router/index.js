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
        index: 1,
        title: '首页',
        isTabber: true,
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my.vue'),
      meta: {
        index: 2,
        title: '个人中心',
        isTabber: true,
      }
    },
    {
      path: '/hotel-detail',
      name: 'hotelDetail',
      component: () => import('@/views/hotel-detail.vue'),
      meta: {
        transition: 'slide-left',
        title: '房间详情',
        isBack: true,
      }
    },
    {
      path: '/buyOrder-detail',
      name: 'buyOrderDetail',
      component: () => import('@/views/buyOrder-detail.vue'),
      meta: {
        transition: 'slide-left',
        title: '房间预定',
        isBack: true,
      }
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('@/views/purchase.vue'),
      meta: {
        transition: 'slide-left',
        title: '订单支付',
        isBack: true,
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