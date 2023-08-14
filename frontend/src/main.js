import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import { createApp } from 'vue';

createApp(App).use(router).mount('#app');
