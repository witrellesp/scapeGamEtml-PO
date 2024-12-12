import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/PageAccueil.vue'),
    },
    {
      path: '/game',
      name: 'game',

      children: [
        {
          path: 'challenge1',
          component: () => import('@/views/1ChallengeOne.vue'),
        },

        {
          path: 'challenge2',
          component: () => import('@/views/2ChallengeTwo.vue'),
        },

        {
          path: 'challenge3',
          component: () => import('@/views/3ChallengeThree.vue'),
        },

        {
          path: 'challenge4',
          component: () => import('@/views/4ChallengeFour.vue'),
        },
        {
          path: 'endGame',
          component: () => import('@/views/5ChallengeFive.vue'),
        },
      ],
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
