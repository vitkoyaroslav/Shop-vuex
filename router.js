import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Cart from './pages/cart'

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'cart',
                path: '/cart',
                component: Cart,
            },
            {
                name: 'home',
                path: '/',
                component: Home,
            },
        ]
    })
}