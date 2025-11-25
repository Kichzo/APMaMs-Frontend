import { createRouter, createWebHistory} from 'vue-router'
import Credentials from '/src/views/Credentials.vue'
import Signin from '/src/views/signin.vue'
const routes = [
    {
        paths:'/',
        name:'Home',
        component:Credentials
    },
    {
        paths:'/Credentials',
        name:'Credentials',
        component:Credentials
    },
    {
        paths:'/',
        name:'Signin',
        component:Signin
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router