import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MainPage from '../views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/input-name'
    },
    {
      path: '/:name',
      name: 'main-page',
      component: MainPage,
    },
    {
      path: '/home-page',
      name: 'homepage',
      component: HomePage
    }
  ]
});

export default router;
