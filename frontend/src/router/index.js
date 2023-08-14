//import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from '../App.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount('#app');

export default router;
