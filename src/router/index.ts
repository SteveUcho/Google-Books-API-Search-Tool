import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BookSearchView from '../views/BookSearchView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'booksearch',
    component: BookSearchView,
  },
  {
    path: '/savedbooks',
    name: 'savedbooks',
    component: () => import('../views/SavedBooksView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
