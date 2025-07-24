import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
    },
    {
      path: '/vr/a00',
      name: 'vr_a00',
      component: () => import('../views/VrView_a00.vue'),
    },
    {
      path: '/vr/a02',
      name: 'vr_a02',
      component: () => import('../views/VrView_a02.vue'),
    },
    {
      path: '/vr/a03',
      name: 'vr_a03',
      component: () => import('../views/VrView_a03.vue'),
    },
    {
      path: '/vr/a04',
      name: 'vr_a04',
      component: () => import('../views/VrView_a04.vue'),
    },
    {
      path: '/vr/a05',
      name: 'vr_a05',
      component: () => import('../views/VrView_a05.vue'),
    },
    {
      path: '/vr/a06',
      name: 'vr_a06',
      component: () => import('../views/VrView_a06.vue'),
    },
    {
      path: '/vr/a09',
      name: 'vr_a09',
      component: () => import('../views/VrView_a09.vue'),
    },
    {
      path: '/vr/a11',
      name: 'vr_a11',
      component: () => import('../views/VrView_a11.vue'),
    },
    {
      path: '/vr/a12',
      name: 'vr_a12',
      component: () => import('../views/VrView_a12.vue'),
    },
    {
      path: '/vr/a15',
      name: 'vr_a15',
      component: () => import('../views/VrView_a15.vue'),
    },
    {
      path: '/vr/b00',
      name: 'vr_b00',
      component: () => import('../views/VrView_b00.vue'),
    },
    {
      path: '/vr/b01-1',
      name: 'vr_b01-1',
      component: () => import('../views/VrView_b01-1.vue'),
    },
    {
      path: '/vr/b01-2',
      name: 'vr_b01-2',
      component: () => import('../views/VrView_b01-2.vue'),
    },
    {
      path: '/vr/b02-1',
      name: 'vr_b02-1',
      component: () => import('../views/VrView_b02-1.vue'),
    },
    {
      path: '/vr/b02-2',
      name: 'vr_b02-2',
      component: () => import('../views/VrView_b02-2.vue'),
    },
    {
      path: '/vr/b04',
      name: 'vr_b04',
      component: () => import('../views/VrView_b04.vue'),
    },
    {
      path: '/vr/b05',
      name: 'vr_b05',
      component: () => import('../views/VrView_b05.vue'),
    },
    {
      path: '/vr/c00',
      name: 'vr_c00',
      component: () => import('../views/VrView_c00.vue'),
    },
    {
      path: '/vr/c01',
      name: 'vr_c01',
      component: () => import('../views/VrView_c01.vue'),
    },
    {
      path: '/vr/c02',
      name: 'vr_c02',
      component: () => import('../views/VrView_c02.vue'),
    },
    {
      path: '/vr/c03',
      name: 'vr_c03',
      component: () => import('../views/VrView_c03.vue'),
    },
    {
      path: '/vr/c04',
      name: 'vr_c04',
      component: () => import('../views/VrView_c04.vue'),
    },
  ],
})

export default router
