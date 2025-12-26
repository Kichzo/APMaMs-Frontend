import { createRouter, createWebHistory } from 'vue-router'

import Credentials from '/src/views/Credentials.vue'
import Signin from '/src/views/Signin.vue'
import Dashboard from '/src/views/Dashboard.vue'
import Account from '/src/views/Account.vue'

const routes = [
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },

    {
        path: '/',
        name: 'Credentials',
        component: Credentials
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

    {
        path: '/Account',
        name: 'Account',
        component: Account
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
