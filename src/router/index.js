import { createRouter, createWebHistory } from 'vue-router'

//Auth Pages
import Credentials from '/src/views/Credentials.vue'
import Signin from '/src/views/Signin.vue'

//Dashboards
import UserDashboard from '/src/views/UserDashboard.vue'
import AdminDashboard from '/src/views/AdminDashboard.vue'
import AdviserDashboard from '/src/views/AdviserDashboard.vue'

//User Pages
import Account from '/src/views/Account.vue'
import Activity from '/src/views/Activity.vue'
import ActionPlan from '/src/views/ActionPlan.vue'
import Calendar from '/src/views/Calendar.vue'
import Financial from '/src/views/Financial.vue'
import Organizations from '/src/views/Organizations.vue'
import Reports from '/src/views/Reports.vue'
import Approvals from '/src/views/Approvals.vue'
import CreateActivity from '/src/views/CreateActivity.vue'
import Users from '/src/views/Users.vue'

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
        path: '/userdashboard',
        name: 'UserDashboard',
        component: UserDashboard,
    },

    {
        path: '/admindashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
    },

    {
        path: '/adviserdashboard',
        name: 'AdviserDashboard',
        component: AdviserDashboard
    },

    {
        path: '/account',
        name: 'Account',
        component: Account
    },

    {
        path: '/activity',
        name: 'Activity',
        component: Activity
    },
    {
        path: '/actionplan',
        name: 'ActionPlan',
        component: ActionPlan
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/financial',
        name: 'Financial',
        component: Financial
    },
    {
        path: '/organizations',
        name: 'Organizations',
        component: Organizations
    },
    {
        path: '/report',
        name: 'Reports',
        component: Reports
    },
    {
        path: '/approvals',
        name: 'Approvals',
        component: Approvals
    },
    {
        path: '/createactivity',
        name: 'CreateActivity',
        component: CreateActivity
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
