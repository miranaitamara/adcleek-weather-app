import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '@/views/WeatherPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeatherPage,
    },
  ],
})

export default router
