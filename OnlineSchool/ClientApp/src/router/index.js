import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Home.vue' 
import NotFound from '../404.vue' 
import Information from '../Information.vue'
import Classes from "../Classes.vue"
import Prices from "../Prices.vue"
import Reviews from "../Reviews.vue"
import About from "../About.vue"

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