import {createRouter, createWebHistory} from 'vue-router'
import MainView from "@/views/MainView.vue";
import AddressView from "@/views/AddressView.vue";


const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainView
    },
    {
        path: '/address',
        name: 'Address',
        component: AddressView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
