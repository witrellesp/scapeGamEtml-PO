import { createRouter, createWebHistory } from 'vue-router'

import PageAccueil from '@/views/PageAccueil.vue'
import Challenge1 from '@/views/Challenge1.vue'
import Challenge2 from '@/views/Challenge2.vue'
import Challenge3 from '@/views/Challenge3.vue'
import Challenge4 from '@/views/Challenge4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageAccueil,
    },
    {
      path: '/challenge1',
      name: 'challenge1',
      component: Challenge1,
    },
    ,
    {
      path: '/challenge2',
      name: 'challenge2',
      component: Challenge2,
    },
    ,
    {
      path: '/challenge3',
      name: 'challenge3',
      component: Challenge3,
    },
    ,
    {
      path: '/challenge4',
      name: 'challenge4',
      component: Challenge4,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
