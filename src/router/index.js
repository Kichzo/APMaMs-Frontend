import { createRouter, createWebHistory } from 'vue-router'

import Credentials from '/src/views/Credentials.vue'
import Signin from '/src/views/Signin.vue'
import Dashboard from '/src/views/Dashboard.vue'
import Account from '/src/views/Account.vue'
import Activity from '/src/views/Activity.vue'
import ActionPlan from '/src/views/ActionPlan.vue'
import Calendar from '/src/views/Calendar.vue'
import Financial from '/src/views/Financial.vue'
import Organizations from '/src/views/Organizations.vue'
import Reports from '/src/views/Reports.vue'


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
    {
        path:   '/financial',
        name:    'Financial',
        component:  Financial
    },
    {
        path:   '/organizations',
        name:    'Organizations',
        component:  Organizations
    },
    {
        path:   '/report',
        name:    'Reports',
        component:  Reports
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
