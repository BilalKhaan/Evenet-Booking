import {
  createWebHistory,
  createRouter
} from 'vue-router/dist/vue-router.esm-bundler';
import Events from './views/Events.vue';
import Billing from './views/Billing.vue';

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/billing/:id',
    name: 'Billing',
    component: Billing
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
