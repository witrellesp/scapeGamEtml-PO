import { createRouter, createWebHistory } from 'vue-router'

import PageAccueil from '@/views/PageAccueil.vue'
import ChallengeOne from '@/views/1ChallengeOne.vue'
import ChallengeTwo from '@/views/2ChallengeTwo.vue'
import ChallengeThree from '@/views/3ChallengeThree.vue'
import ChallengeFour from '@/views/4ChallengeFour.vue'
import ChallengeFive from '@/views/5ChallengeFive.vue'

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
      component: ChallengeOne,
    },

    {
      path: '/challenge2',
      name: 'challenge2',
      component: ChallengeTwo,
    },

    {
      path: '/challenge3',
      name: 'challenge3',
      component: ChallengeThree,
    },

    {
      path: '/challenge4',
      name: 'challenge4',
      component: ChallengeFour,
    },
    {
      path: '/endGame',
      name: 'endGame',
      component: ChallengeFive,
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
