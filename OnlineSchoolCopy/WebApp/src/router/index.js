import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue' 
import NotFound from '@/views/404.vue' 
import Information from '@/views/Information.vue'
import Classes from "@/views/Classes.vue"
import Prices from "@/views/Prices.vue"
import Reviews from "@/views/Reviews.vue"
import About from "@/views/About.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/information', component: Information },
    { path: '/classes', component: Classes },
    { path: '/prices', component: Prices },
    { path: '/reviews', component: Reviews },
    { path: '/about', component: About },
    {
        path: '/:pathMatch(.*)*', 
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router