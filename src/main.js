import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

import CreatePlayer from './components/CreatePlayer.vue'
import EditPlayers from './components/EditPlayers.vue'

const routes = [
  {
    path: '/',
    redirect: '/new'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/new'
  },
  {
    path: '/new',
    component: CreatePlayer
  },
  {
    path: '/edit',
    component: EditPlayers
  }
]

const router = createRouter({
  history : createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')
