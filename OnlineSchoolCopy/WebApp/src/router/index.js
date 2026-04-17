import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue' 
import NotFound from '@/views/404.vue' 
import Information from '@/views/Information.vue'
import Classes from "@/views/Classes.vue"
import Prices from "@/views/Prices.vue"
import Reviews from "@/views/Reviews.vue"
import About from "@/views/About.vue"

const routes = [
    { path: '/', component: Home, name: 'Главная', meta: { title: 'Главная страница' }  },
    { path: '/home', component: Home, name: 'Главная', meta: { title: 'Главная страница' } },
    { path: '/information', component: Information, name: 'Информация', meta: { title: 'Информация о школе' } },
    { path: '/classes', component: Classes, name: 'Классы', meta: { title: 'Классы' } },
    { path: '/prices', component: Prices, name: 'Услуги', meta: { title: 'Услуги' } },
    { path: '/reviews', component: Reviews, name: 'Отзывы', meta: { title: 'Отзывы о школе' } },
    { path: '/about', component: About, name: 'О нас', meta: { title: 'О нас о школе' } },
    {
        path: '/:pathMatch(.*)*', 
        component: NotFound, name: '404', meta: { title: '404 Not Found' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '';
  next();
});

export default router