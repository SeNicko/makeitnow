import Vue from 'vue';
import VueRouter from 'vue-router';
import Create from '@/views/Create.vue';
import Edit from '@/views/Edit.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
