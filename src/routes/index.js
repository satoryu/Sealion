import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/routes/HomePage.vue'
import TodoDetailPage from '../components/routes/TodoDetailPage.vue'

const routes = [
  { name: 'Home', path: '/', component: HomePage },
  { name: 'TodoDetail', path: '/todos/:id', component: TodoDetailPage, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})