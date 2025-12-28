import { createRouter, createWebHistory } from 'vue-router'

import Credentials from '/src/views/Credentials.vue'
import Signin from '/src/views/Signin.vue'
import Dashboard from '/src/views/Dashboard.vue'
import Account from '/src/views/Account.vue'
import Activity from '/src/views/Activity.vue'
import ActionPlan from '/src/views/ActionPlan.vue'
import Calendar from '/src/views/Calendar.vue'

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
        path: '/account',
        name: 'Account',
        component: Account
    },

    {
        path:   '/activity',
        name:    'Activity',
        component:  Activity
    },
    {
        path:   '/actionplan',
        name:    'ActionPlan',
        component:  ActionPlan
    },
    {
        path:   '/calendar',
        name:    'Calendar',
        component:  Calendar
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
