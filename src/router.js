import {
  createWebHistory,
  createRouter
} from 'vue-router/dist/vue-router.esm-bundler';
import Events from './views/Events.vue';

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
