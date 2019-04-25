import VueRouter from 'vue-router'
import helper from './utils/helper'

import MainLayout  from './layouts/Main.vue'
import GuestLayout  from './layouts/Guest.vue'
import Home  from './views/Home.vue'
import Page  from './views/Page.vue'

import Login  from './views/auth/Login.vue'
import Logout  from './views/auth/Logout.vue'
import Recover  from './views/auth/Recover.vue'

let routes = [
    {
        path: '/',
        component: MainLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                component: Home,
                meta: { title: 'Dashboard' }
            },
            {
                path: '/home',
                component: Home,
                meta: { title: 'Dashboard' }
            },
            {
                path: '/page',
                component: Page,
                meta: { title: 'Form Basic' }
            }
        ]
    },
    {
        path: '/',
        component: GuestLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/logout',
                component: Logout
            }
        ]
    },
    {
        path: '/',
        component: GuestLayout,
        meta: { requiresGuest: true },
        children: [
            {
                path: '/login',
                component: Login
            },
            {
                path: '/recover',
                component: Recover
            },
        ]
    }
];

const router = new VueRouter({
	routes,
    linkActiveClass: 'active',
    mode: 'history'
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(m => m.meta.requiresAuth)){
        return helper.check().then(response => {
            if(!response){
                return next({ path : '/login'})
            }

            return next();
        })
    }

    if (to.matched.some(m => m.meta.requiresGuest)){
        return helper.check().then(response => {
            if(response){
                return next({ path : '/'})
            }

            return next();
        })
    }

    return next();
});

export default router;
