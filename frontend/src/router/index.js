//import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from '../App.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import PdfFile from '../views/PdfFile.vue';

// Routes for the application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'resume',
    component: PdfFile,
    meta: { title: 'Resume' },
  },
  // catch all 404 - define at the very end
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

// creating new router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const defaultTitle = "Kyle's Portfolio";
// update page title
router.afterEach((to) => {
  document.title = to.meta.title || defaultTitle;
});

createApp(App).use(router).mount('#app');

export default router;
